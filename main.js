//pizza names//




function myF() {

    function getName() {
        var PName = document.getElementById("name")
        document.getElementById("totalp").innerHTML = PName
        if (PName = "Neapolitan")
            var PPrice = 10
        else if (PName = "greek")
            PPrice = 7
        else if (PName = "magarita")
            PPrice = 5
        else if (PName = "luis")
            PPrice = 10

    }


    //bases//
    function getbase() {
        base = document.getElementById("base").value

        if (base = "normal")
            BPrice = 2
        else if (base = "thick")
            BPrice = 4
        else if (base = "thin")
            Bprice = 3
    }



    //sizes//

    function getsize() {
        size = document.getElementById("size").value

        if (size = "Small")
            SPrice = 8
        else if (size = "Medium")
            SPrice = 10
        else if (size = "Large")
            Sprice = 12
    }

    $(document).ready(function() {
            $(".pineapple").select(function() {
                tprice = 1

            });
            $(document).ready(function() {
                    $(".cheese").select(function() {
                        tprice = 2

                    });
                    $(document).ready(function() {
                            $(".sauce").select(function() {
                                tprice = 3

                            });

                        }

                        /function calcTotal() {

                        Total = PPrice + SPrize + T1Price + T2Price + T3Price + BPrice


                    })
            })
    })
}