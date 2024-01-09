package main

import (
	"encoding/json"
	"fmt"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	p "github.com/kr/pretty"
	"io/ioutil"
	"net/http"
	"time"
)

func main() {
	r := gin.Default()

	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000"},
		AllowMethods:     []string{"PUT", "PATCH", "GET", "POST"},
		AllowHeaders:     []string{"Origin"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		AllowOriginFunc: func(origin string) bool {
			return origin == "https://vic.cinder.app"
		},
		MaxAge: 12 * time.Hour,
	}))

	r.Use(FirebaseAuthID())

	r.GET("/health", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"status": "OK",
		})
	})

	r.GET("/incidents", func(c *gin.Context) {
		url := "https://data.emergency.vic.gov.au/Show?pageId=getIncidentJSON"

		// Make HTTP GET request
		response, err := http.Get(url)
		if err != nil {
			fmt.Printf("The HTTP request failed with error %s\n", err)
			return
		}
		defer response.Body.Close()

		// Read the response body
		data, _ := ioutil.ReadAll(response.Body)

		// Unmarshal the JSON data into the struct
		var incidentResponse CFAIncidentResponse
		if err := json.Unmarshal(data, &incidentResponse); err != nil {
			fmt.Printf("Error unmarshalling the JSON: %s\n", err)
			return
		}

		c.JSON(200, incidentResponse.Results)
	})

	err := r.Run(":9000") // listen and serve on 0.0.0.0:8080
	if err != nil {
		panic(err)
	}
}

func FirebaseAuthID() gin.HandlerFunc {
	return func(c *gin.Context) {

		println("FirebaseAuthID middleware")
		_, err := p.Println(c.Request.Header.Get("Authorization"))
		if err != nil {
			c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"message": "Unauthorized, no authentication header provided"})
		}

		c.Set("uid", "12345")

		c.Next()

	}
}

type CFAIncidentResponse struct {
	Results []struct {
		IncidentNo         int         `json:"incidentNo"`
		LastUpdateDateTime string      `json:"lastUpdateDateTime"`
		OriginDateTime     string      `json:"originDateTime"`
		IncidentType       string      `json:"incidentType"`
		IncidentLocation   string      `json:"incidentLocation"`
		IncidentStatus     string      `json:"incidentStatus"`
		IncidentSize       string      `json:"incidentSize"`
		Name               string      `json:"name"`
		Territory          string      `json:"territory"`
		ResourceCount      int         `json:"resourceCount"`
		Latitude           float64     `json:"latitude"`
		Longitude          float64     `json:"longitude"`
		EventCode          string      `json:"eventCode"`
		FireDistrict       string      `json:"fireDistrict"`
		Municipality       string      `json:"municipality"`
		Category1          string      `json:"category1"`
		Category2          string      `json:"category2"`
		FeedType           string      `json:"feedType"`
		Agency             string      `json:"agency"`
		OriginStatus       string      `json:"originStatus"`
		CreatedDt          interface{} `json:"createdDt"`
		LastUpdatedDt      int64       `json:"lastUpdatedDt"`
		LastUpdatedDtStr   string      `json:"lastUpdatedDtStr"`
		OriginDateTimeStr  string      `json:"originDateTimeStr"`
		Catg1CssClass      string      `json:"catg1CssClass"`
		IncidentSizeFmt    string      `json:"incidentSizeFmt"`
		Type               string      `json:"type"`
	} `json:"results"`
}
