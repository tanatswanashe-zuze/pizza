//pizza names//
function myF() {
    function getName() {
        PName = getElementById("Name").value
        if (PName = "Neapolitan")
            PPrice = 10
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

        if (size = "small")
            SPrice = 8
        else if (size = "medium")
            SPrice = 10
        else if (size = "large")
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

                                (PPrice, SPrize, BPrice) = {
                                    Total = PPrice + SPrize + T1Price + T2Price + T3Price + BPrice
                                    alert(Total)
                                }
                            };