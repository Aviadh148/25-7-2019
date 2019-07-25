module.service("requestService", function(urlConst, dataValue, $http) {

    let p = $http.get(urlConst.url)
    this.data= dataValue
    console.log(urlConst.url)
    p.then( (resp) => {
        // happens in the future - when the responsee will come back!

        this.data.warp.results = resp.data.results
        this.data.warp.info = resp.data.results
         console.log(resp.data["results"])
         console.log(resp.data["info"])
    }, (err) => {
        console.log(`ERROR === ${err}`)   
    }
    )
})