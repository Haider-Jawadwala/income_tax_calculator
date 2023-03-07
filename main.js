
    var txtcgtotaltmpvalue = new tempobject();
    var txtstcgnormaltmpvalue = new tempobject();
    var txtstcg111atmpvalue = new tempobject();
    var ltcgwithindexationtmpvalue = new tempobject();
    var ltcgwithoutindexationtmpvalue = new tempobject();
    var ltcgcoverd112ucgtmpvalue = new tempobject();
    var txtltcgcoverd112ucg00  = 0;
    var txtltcgcoverd112ucg01  = 0;
    var txtltcgcoverd112ucg02  = 0;
    var txtltcgcoverd112ucg03  = 0;
    var txtltcgcoverd112ucg04  = 0;
    var ltcgcoverd112ucgtotail = 0;

    function ChangeLabels() {
        var selectedAssYear = document.getElementById("select_assessment").value;
        if (selectedAssYear == "2022-23") selectedAssYear = "2021-22";

        document.getElementById("deductions_equity_scheme").value =  "";
        document.getElementById("deductions_longterm_bond").value = "";
        document.getElementById("deductions_intrest_loan_house").value = "";
        document.getElementById("deductions_intrest_electric_vehicle").value = "";
        document.getElementById("div_long_capital_gain").style.display = "none";
        document.getElementById("div_income_lottery").style.display = "none";
        document.getElementById("div_icome_excess_10lakh").style.display = "none";
        document.getElementById("div_long_capital_gain_result").style.display = "none";
        document.getElementById("div_dividend_income").style.display = "none";
        document.getElementById("div_interest_loan_house_property").style.display = "none";
        document.getElementById("div_interest_electric_vehicle").style.display = "none";

        document.getElementById("div_income_self_propery").style.display = "block";
        document.getElementById("div_life_insurance_premium_deduction").style.display = "block";
        document.getElementById("div_long_term_infrastructure").style.display = "block";
        document.getElementById("div_select_taxation").style.display = "none";

        if (selectedAssYear == "2021-22") {
            document.getElementById("div_select_taxation").style.display = "block";

            if (document.getElementById("select_taxation_11").value == "1") {
                document.getElementById("div_income_self_propery").style.display = "none";
                document.getElementById("intrest_house").value = "";
                document.getElementById("div_life_insurance_premium_deduction").style.display = "none";
                document.getElementById("div_long_term_infrastructure").style.display = "none";
                cleardeductioninputvalue();
                calculatededuction();
                calcHP();
            }
            else {
                document.getElementById("div_income_self_propery").style.display = "block";
            }
        }
        switch (selectedAssYear) {
            case "2020-21":
            case "2021-22":
                $("#div_equity_saving_scheme").hide();
                $("#div_long_term_infrastructure_bonds").hide();
                document.getElementById("div_interest_loan_house_property").style.display = "block";
                document.getElementById("div_interest_electric_vehicle").style.display = "block";
                document.getElementById("div_long_capital_gain").style.display = "block";
                document.getElementById("div_income_lottery").style.display = "none";
                document.getElementById("div_icome_excess_10lakh").style.display = "none";
                document.getElementById("div_dividend_income").style.display = "none";
                document.getElementById("div_long_capital_gain_result").style.display = "block";
                ChangeLableAccordingAssesmentYear();
                break;
            default:
                $("#div_equity_saving_scheme").show();
                if (selectedAssYear == "2013-14") {
                    $("#div_long_term_infrastructure_bonds").hide();
                }
                else { $("#div_long_term_infrastructure_bonds").show(); }
                ChangeLabledefault();
        }
    }

    function ChangeLabledefault() {
        document.getElementById("spanidIncomeTax").innerHTML = Res.page_TAXTOOLS_INCOMETAX_WITHOUT87A;
    
    }

    function ChangeLableAccordingAssesmentYear() {
        var selectedassessType = document.getElementById("select_taxpayer").value;
        if (selectedassessType == "Individual") {
            document.getElementById("spanidIncomeTax").innerHTML = Res.page_TAXTOOLS_INCOMETAX;
        }
        else {
            ChangeLabledefault();
        }
    }

    function tempobject() {
        this.value = 0;
    }

    function fillcategoryIncombo() {
      
        var selectedAssYear = document.getElementById("select_assessment").value;
        if (selectedAssYear == "2022-23") selectedAssYear = "2021-22";
        fillcategorycombojs(selectedAssYear, catenew, cateold);
        setStatusIncombo();

    }

    function setCgPeriodControls() {

        var selectedAssYear = document.getElementById("select_assessment").value; 
        var selectedAssType = document.getElementById("select_taxpayer").value;
        if (selectedAssYear != "Select" && selectedAssYear != "2020-21" && selectedAssYear!="2021-22"&& selectedAssYear!="2022-23") {
            setClearValue();
        }
        

        if (selectedAssYear == "2022-23") {

            stcgq0.style.display = "block";
            stcg111aq0.style.display = "block";

            ltcgwithindexq0.style.display = "block";
            ltcgwithoutindexq0.style.display = "block";

            document.getElementById("short_term_gain1").style.display = "block";
            document.getElementById("short_term_gains_total2").style.display = "block";
            document.getElementById("long_term_gains_1").style.display = "block";
            document.getElementById("long_term_gains_2_1").style.display = "block";

            document.getElementById("div_long_capital_gain").style.display = (selectedAssYear == "2020-21" || selectedAssYear == "2021-22" || selectedAssYear == "2022-23") ? "block" : "none";
            document.getElementById("div_income_lottery").style.display = (selectedAssYear == "2020-21" || selectedAssYear == "2021-22" || selectedAssYear == "2022-23") ? "none" : "none";
            document.getElementById("div_icome_excess_10lakh").style.display = (selectedAssYear == "2020-21" || selectedAssYear == "2021-22" || selectedAssYear == "2022-23") ? "none" : "none";
            document.getElementById("div_dividend_income").style.display = (selectedAssYear == "2020-21" || selectedAssYear == "2021-22" || selectedAssYear == "2022-23") ? "none" : "none";
            document.getElementById("div_long_capital_gain_result").style.display = (selectedAssYear == "2020-21" || selectedAssYear == "2021-22" || selectedAssYear == "2022-23" ) ? "block" : "none";

        }
        else {
            stcgq0.style.display = "none";
            stcg111aq0.style.display = "none";

            ltcgwithindexq0.style.display = "none";
            ltcgwithoutindexq0.style.display = "none";
            document.getElementById("short_term_gain1").style.display = "none";
            document.getElementById("short_term_gains_total2").style.display = "none";
            document.getElementById("long_term_gains_1").style.display = "none";
            document.getElementById("long_term_gains_2_1").style.display = "none";
        }

        if (selectedAssYear != "Select" && selectedAssType == "Individual") {
            document.getElementById("stcgq1").innerHTML = "From 01/04/" + (parseInt(getNum(selectedAssYear.substring(0, 4))) - 1).toString() + " to 15/09/" + (parseInt(getNum(selectedAssYear.substring(0, 4))) - 1).toString();
            document.getElementById("stcgq2").innerHTML = "From 16/09/" + (parseInt(getNum(selectedAssYear.substring(0, 4))) - 1).toString() + " to 15/12/" + (parseInt(getNum(selectedAssYear.substring(0, 4))) - 1).toString();
            document.getElementById("stcgq3").innerHTML = "From 16/12/" + (parseInt(getNum(selectedAssYear.substring(0, 4))) - 1).toString() + " to 15/03/" + selectedAssYear.substring(0, 4);
            document.getElementById("stcgq4").innerHTML = "From 16/03/" + (parseInt(getNum(selectedAssYear.substring(0, 4)))).toString() + " to 31/03/" + selectedAssYear.substring(0, 4);

            document.getElementById("stcg111aq1").innerHTML = "From 01/04/" + (parseInt(getNum(selectedAssYear.substring(0, 4))) - 1).toString() + " to 15/09/" + (parseInt(getNum(selectedAssYear.substring(0, 4))) - 1).toString();
            document.getElementById("stcg111aq2").innerHTML = "From 16/09/" + (parseInt(getNum(selectedAssYear.substring(0, 4))) - 1).toString() + " to 15/12/" + (parseInt(getNum(selectedAssYear.substring(0, 4))) - 1).toString();
            document.getElementById("stcg111aq3").innerHTML = "From 16/12/" + (parseInt(getNum(selectedAssYear.substring(0, 4))) - 1).toString() + " to 15/03/" + selectedAssYear.substring(0, 4);
            document.getElementById("stcg111aq4").innerHTML = "From 16/03/" + (parseInt(getNum(selectedAssYear.substring(0, 4)))).toString() + " to 31/03/" + selectedAssYear.substring(0, 4);

            document.getElementById("ltcgwithindexq1").innerHTML = "From 01/04/" + (parseInt(getNum(selectedAssYear.substring(0, 4))) - 1).toString() + " to 15/09/" + (parseInt(getNum(selectedAssYear.substring(0, 4))) - 1).toString();
            document.getElementById("ltcgwithindexq2").innerHTML = "From 16/09/" + (parseInt(getNum(selectedAssYear.substring(0, 4))) - 1).toString() + " to 15/12/" + (parseInt(getNum(selectedAssYear.substring(0, 4))) - 1).toString();
            document.getElementById("ltcgwithindexq3").innerHTML = "From 16/12/" + (parseInt(getNum(selectedAssYear.substring(0, 4))) - 1).toString() + " to 15/03/" + selectedAssYear.substring(0, 4);
            document.getElementById("ltcgwithindexq4").innerHTML = "From 16/03/" + (parseInt(getNum(selectedAssYear.substring(0, 4)))).toString() + " to 31/03/" + selectedAssYear.substring(0, 4);

            document.getElementById("ltcgwithoutindexq1").innerHTML = "From 01/04/" + (parseInt(getNum(selectedAssYear.substring(0, 4))) - 1).toString() + " to 15/09/" + (parseInt(getNum(selectedAssYear.substring(0, 4))) - 1).toString();
            document.getElementById("ltcgwithoutindexq2").innerHTML = "From 16/09/" + (parseInt(getNum(selectedAssYear.substring(0, 4))) - 1).toString() + " to 15/12/" + (parseInt(getNum(selectedAssYear.substring(0, 4))) - 1).toString();
            document.getElementById("ltcgwithoutindexq3").innerHTML = "From 16/12/" + (parseInt(getNum(selectedAssYear.substring(0, 4))) - 1).toString() + " to 15/03/" + selectedAssYear.substring(0, 4);
            document.getElementById("ltcgwithoutindexq4").innerHTML = "From 16/03/" + (parseInt(getNum(selectedAssYear.substring(0, 4)))).toString() + " to 31/03/" + selectedAssYear.substring(0, 4);

            //We Can add new year here by using OR in if Condition//
            if (selectedAssYear == "2022-23") {
                document.getElementById("ltcgcoverd112ucg0").innerHTML = "From 01/04/" + (parseInt(getNum(selectedAssYear.substring(0, 4))) - 1).toString() + " to 15/06/" + (parseInt(getNum(selectedAssYear.substring(0, 4))) - 1).toString();
                document.getElementById("ltcgcoverd112ucg1").innerHTML = "From 16/06/" + (parseInt(getNum(selectedAssYear.substring(0, 4))) - 1).toString() + " to 15/09/" + (parseInt(getNum(selectedAssYear.substring(0, 4))) - 1).toString();
                document.getElementById("ltcgcoverd112ucg2").innerHTML = "From 16/09/" + (parseInt(getNum(selectedAssYear.substring(0, 4))) - 1).toString() + " to 15/12/" + (parseInt(getNum(selectedAssYear.substring(0, 4))) - 1).toString();
                document.getElementById("ltcgcoverd112ucg3").innerHTML = "From 16/12/" + (parseInt(getNum(selectedAssYear.substring(0, 4))) - 1).toString() + " to 15/03/" + selectedAssYear.substring(0, 4);
                document.getElementById("ltcgcoverd112ucg4").innerHTML = "From 16/03/" + (parseInt(getNum(selectedAssYear.substring(0, 4)))).toString() + " to 31/03/" + selectedAssYear.substring(0, 4);
            }
            if (selectedAssYear == "2018-19" || selectedAssYear == "2019-20" || selectedAssYear == "2020-21" || selectedAssYear == "2021-22" || selectedAssYear == "2022-23") { //Added By Manoj - 19 April 2017
                document.getElementById("stcgq0").innerHTML = "From 01/04/" + (parseInt(getNum(selectedAssYear.substring(0, 4))) - 1).toString() + " to 15/06/" + (parseInt(getNum(selectedAssYear.substring(0, 4))) - 1).toString();
                document.getElementById("stcgq1").innerHTML = "From 16/06/" + (parseInt(getNum(selectedAssYear.substring(0, 4))) - 1).toString() + " to 15/09/" + (parseInt(getNum(selectedAssYear.substring(0, 4))) - 1).toString();

                document.getElementById("stcg111aq0").innerHTML = "From 01/04/" + (parseInt(getNum(selectedAssYear.substring(0, 4))) - 1).toString() + " to 15/06/" + (parseInt(getNum(selectedAssYear.substring(0, 4))) - 1).toString();
                document.getElementById("stcg111aq1").innerHTML = "From 16/06/" + (parseInt(getNum(selectedAssYear.substring(0, 4))) - 1).toString() + " to 15/09/" + (parseInt(getNum(selectedAssYear.substring(0, 4))) - 1).toString();

                document.getElementById("ltcgwithindexq0").innerHTML = "From 01/04/" + (parseInt(getNum(selectedAssYear.substring(0, 4))) - 1).toString() + " to 15/06/" + (parseInt(getNum(selectedAssYear.substring(0, 4))) - 1).toString();
                document.getElementById("ltcgwithindexq1").innerHTML = "From 16/06/" + (parseInt(getNum(selectedAssYear.substring(0, 4))) - 1).toString() + " to 15/09/" + (parseInt(getNum(selectedAssYear.substring(0, 4))) - 1).toString();

                document.getElementById("ltcgwithoutindexq0").innerHTML = "From 01/04/" + (parseInt(getNum(selectedAssYear.substring(0, 4))) - 1).toString() + " to 15/06/" + (parseInt(getNum(selectedAssYear.substring(0, 4))) - 1).toString();
                document.getElementById("ltcgwithoutindexq1").innerHTML = "From 16/06/" + (parseInt(getNum(selectedAssYear.substring(0, 4))) - 1).toString() + " to 15/09/" + (parseInt(getNum(selectedAssYear.substring(0, 4))) - 1).toString();
            }
            else if (selectedAssYear == "2017-18") {
                document.getElementById("stcgq0").innerHTML = "From 01/04/" + (parseInt(getNum(selectedAssYear.substring(0, 4))) - 1).toString() + " to 15/06/" + (parseInt(getNum(selectedAssYear.substring(0, 4))) - 1).toString();
                document.getElementById("stcgq1").innerHTML = "From 16/06/" + (parseInt(getNum(selectedAssYear.substring(0, 4))) - 1).toString() + " to 15/09/" + (parseInt(getNum(selectedAssYear.substring(0, 4))) - 1).toString();

                document.getElementById("stcg111aq0").innerHTML = "From 01/04/" + (parseInt(getNum(selectedAssYear.substring(0, 4))) - 1).toString() + " to 15/06/" + (parseInt(getNum(selectedAssYear.substring(0, 4))) - 1).toString();
                document.getElementById("stcg111aq1").innerHTML = "From 16/06/" + (parseInt(getNum(selectedAssYear.substring(0, 4))) - 1).toString() + " to 15/09/" + (parseInt(getNum(selectedAssYear.substring(0, 4))) - 1).toString();

                document.getElementById("ltcgwithindexq0").innerHTML = "From 01/04/" + (parseInt(getNum(selectedAssYear.substring(0, 4))) - 1).toString() + " to 15/06/" + (parseInt(getNum(selectedAssYear.substring(0, 4))) - 1).toString();
                document.getElementById("ltcgwithindexq1").innerHTML = "From 16/06/" + (parseInt(getNum(selectedAssYear.substring(0, 4))) - 1).toString() + " to 15/09/" + (parseInt(getNum(selectedAssYear.substring(0, 4))) - 1).toString();

                document.getElementById("ltcgwithoutindexq0").innerHTML = "From 01/04/" + (parseInt(getNum(selectedAssYear.substring(0, 4))) - 1).toString() + " to 15/06/" + (parseInt(getNum(selectedAssYear.substring(0, 4))) - 1).toString();
                document.getElementById("ltcgwithoutindexq1").innerHTML = "From 16/06/" + (parseInt(getNum(selectedAssYear.substring(0, 4))) - 1).toString() + " to 15/09/" + (parseInt(getNum(selectedAssYear.substring(0, 4))) - 1).toString();
            }
            else {
                document.getElementById("short_term_gain1").value = ""; //ltcgwithindexationAmount
                document.getElementById("short_term_gains_total2").value = "";
                document.getElementById("long_term_gains_1").value = "";
                document.getElementById("long_term_gains_2_1").value = "";
            }
        }
        stcgnormalTotalCalculation();
        stcg111atotalCalculation();
        ltcgwithindexationtotalCalculation();
        ltcgwithoutindexationtotalCalculation();
        txtltcgcoverd112ucgtotalCalculation();
    }

    function setClearValue() {
        document.getElementById("long_term_gains_3_1").value = "";
        document.getElementById("long_term_gains_3_2").value = "";
        document.getElementById("long_term_gains_3_3").value = "";
        document.getElementById("long_term_gains_3_4").value = "";
        document.getElementById("long_term_gains_3_5").value = "";

        document.getElementById("income_lottery_1").value = "";
        document.getElementById("income_lottery_2").value = "";
        document.getElementById("income_lottery_3").value = "";
        document.getElementById("income_lottery_4").value = "";
        document.getElementById("income_lottery_5").value = "";

        document.getElementById("income_excess_10lakh_1").value = "";
        document.getElementById("income_excess_10lakh_2").value = "";
        document.getElementById("income_excess_10lakh_3").value = "";
        document.getElementById("income_excess_10lakh_4").value = "";
        document.getElementById("income_excess_10lakh_5").value = "";
    }

    function setStatusIncombo() {
        var isSimpleCalculation = false
        setStatuscombojs(document.getElementById("select_taxpayer"), document.getElementById("div_select_gender"), isSimpleCalculation, document.getElementById("div_tax_normal_rate"), document.getElementById("net_taxable_income"));
        setCgPeriodControls();
    }

    $(document).ready(function () {
        setCgPeriodControls();
    });

    function calculateResult() {
        
        var isSimpleCalculation = false
        var stcgnormalAmount = 0;
        var stcg111aAmount = 0;
        var ltcgwithindexationAmount = 0;
        var ltcgwithoutindexationAmount = 0;
        var ltcgcoverd112ucgAmount = 0;

        var selectedAssYear = document.getElementById("select_assessment").value;
        if (selectedAssYear == "2022-23") selectedAssYear = "2021-22";
        var selectedAssType = document.getElementById("select_taxpayer").value;
        var selectedResiStatus = document.getElementById("select_resident").value;

        if (selectedAssYear == "2010-11" || selectedAssYear == "2011-12") {
            var sAssCategory = document.getElementById("select_genderold").value;
        }
        else {
            var sAssCategory = document.getElementById("select_gender").value;
        }

        //Logic implimented according to AY 2019-20
        if (selectedAssYear == "2019-20" || selectedAssYear == "2020-21" || selectedAssYear == "2021-22") {
            $("#div_interest_on_deposit").show();
            $("#div_interest_deposit_saving_account").hide();
            //document.getElementById("deductions_intrest_saving_acc").value = "";
            $("#divtxtEduCess").hide();
            $("#divLiteral67").hide();
            $("#divLiteral82").show();
            $("#divLiteral7").hide();
            switch (selectedAssYear) {
                case "2019-20":
                    $("#div_income_deduction_40000").show();
                    $("#div_income_deduction_50000").hide();
                    $("#div_income_before_deduction").hide();
                    break;
                case "2020-21":
                    $("#div_income_deduction_40000").hide();
                    $("#div_income_deduction_50000").show();
                    $("#div_income_before_deduction").hide();
                    break;
                case "2021-22":
                    $("#div_income_deduction_40000").hide();
                    if (document.getElementById("select_taxation_11").value == "1") {
                        $("#div_income_deduction_50000").hide();
                        $("#div_income_before_deduction").show();

                    }
                    else {
                        $("#div_income_deduction_50000").show();
                        $("#div_income_before_deduction").hide();
                    }
                    break;                
                default:
                    break;
            }
        }
        else {
            $("#div_interest_on_deposit").hide();
            //document.getElementById("deductions_intrest_deposits").value = "";
            $("#divtxtEduCess").show();
            $("#divLiteral67").show();
            $("#divLiteral82").hide();
            $("#divLiteral7").show();
            $("#div_income_deduction_40000").hide();
            $("#div_income_deduction_50000").hide();
            $("#div_income_before_deduction").hide();
        }

        //Logic implimented according to AY 2019-20
        if ((selectedAssYear == "2019-20" || selectedAssYear == "2020-21" || selectedAssYear == "2021-22") && (sAssCategory == "Senior Citizen" || sAssCategory == "Super Senior Citizen") && (selectedResiStatus == "Resident" || selectedResiStatus == "Not Ordinary Resident")) {
            $("#div_interest_on_deposit").show();
            document.getElementById("deductions_intrest_saving_acc").value = "";
            $("#div_interest_deposit_saving_account").hide();
        }
        else if ((selectedAssYear == "2019-20" || selectedAssYear == "2020-21" || selectedAssYear == "2021-22") && (sAssCategory == "Senior Citizen" || sAssCategory == "Super Senior Citizen") && selectedResiStatus == "Non-Resident") {
            document.getElementById("deductions_intrest_deposits").value = "";
            $("#div_interest_on_deposit").hide();
            $("#div_interest_deposit_saving_account").show();
        }
        else if ((selectedAssYear == "2019-20" || selectedAssYear == "2020-21" || selectedAssYear == "2021-22") && (sAssCategory == "Male" || sAssCategory == "Female")) {
            document.getElementById("deductions_intrest_deposits").value = "";
            $("#div_interest_on_deposit").hide();
            $("#div_interest_deposit_saving_account").show();
        }

        if (selectedAssType == "Select" || selectedAssYear == "Select" || (selectedAssType == "Individual" && (selectedResiStatus == "Select" || sAssCategory == "Select"))) {
            document.getElementById("income_tax_main").value = "";
            document.getElementById("surcharges").value = "";
            document.getElementById("educational_cess").value = "";
            document.getElementById("health_educational_cess").value = "";
            document.getElementById("total_tax_liability").value = "";
            return;
        }

        if (selectedAssType == "Individual") {

            //234A,B,C Interest Calculation                

            //Quater 0

            if (selectedAssYear == "2017-18" || selectedAssYear == "2018-19" || selectedAssYear == "2019-20" || selectedAssYear == "2020-21" || selectedAssYear == "2021-22") {
                var maxthreshholdlimitfor112A = 0;
                if (selectedAssYear == "2020-21" || selectedAssYear == "2021-22") {
                    txtltcgcoverd112ucg00 = parseInt(getNum(document.getElementById("long_term_gains_3_1").value)) >= maxthreshholdlimitfor112A ? (parseInt(getNum(document.getElementById("long_term_gains_3_1").value)) - maxthreshholdlimitfor112A) : 0
                    if (parseInt(getNum(document.getElementById("long_term_gains_3_1").value)) >= maxthreshholdlimitfor112A) {
                        maxthreshholdlimitfor112A = 0;
                    }
                    else {
                        maxthreshholdlimitfor112A = maxthreshholdlimitfor112A - parseInt(getNum(document.getElementById("long_term_gains_3_1").value));
                    }
                }
                txtcgtotaltmpvalue.value = parseInt(getNum(document.getElementById("short_term_gain1").value)) +
                parseInt(getNum(document.getElementById("short_term_gains_total2").value)) +
                parseInt(getNum(document.getElementById("long_term_gains_1").value)) +
                parseInt(getNum(document.getElementById("long_term_gains_2_1").value)) +
                txtltcgcoverd112ucg00;

                txtstcgnormaltmpvalue.value = parseInt(getNum(document.getElementById("short_term_gain1").value));
                txtstcg111atmpvalue.value = parseInt(getNum(document.getElementById("short_term_gains_total2").value));
                ltcgwithindexationtmpvalue.value = parseInt(getNum(document.getElementById("long_term_gains_1").value));
                ltcgwithoutindexationtmpvalue.value = parseInt(getNum(document.getElementById("long_term_gains_2_1").value));
                
                ltcgcoverd112ucgtmpvalue.value = txtltcgcoverd112ucg00;

                stcgnormalAmount = txtstcgnormaltmpvalue.value;
                stcg111aAmount = txtstcg111atmpvalue.value;
                ltcgwithindexationAmount = ltcgwithindexationtmpvalue.value;
                ltcgwithoutindexationAmount = ltcgwithoutindexationtmpvalue.value;
                ltcgcoverd112ucgAmount = ltcgcoverd112ucgtmpvalue.value;

                document.getElementById("net_taxable_income").value = addthousandseprator(calcTotalIncome());

                calcSpecialIncomeTax(selectedResiStatus, selectedAssYear, sAssCategory);
                var nexemptionlimit = exemptionlimit(selectedResiStatus, selectedAssYear, sAssCategory, document.getElementById("select_taxation_11").value);
                var gti = calculationGTI();
                var y = calculationY(gti);

             calculateDatajs(selectedAssYear, selectedAssType, sAssCategory, document.getElementById("net_taxable_income"), selectedResiStatus,
             document.getElementById("income_tax_main"),
             document.getElementById("surcharges"),
             document.getElementById("educational_cess"),
             document.getElementById("health_educational_cess"),
             document.getElementById("total_tax_liability"),

             document.getElementById("ctl00_SPWebPartManager1_g_1a7c992e_28f5_4dff_a553_9a619607f0db_chkUs115BA"), false, false,
             document.getElementById("ctl00_SPWebPartManager1_g_1a7c992e_28f5_4dff_a553_9a619607f0db_chkDomesticNotExceed5Cr"), document.getElementById("select_taxation_11").value, "2",

             document.getElementById("net_taxable_income"), nexemptionlimit,
             document.getElementById("income_agriculture"), y,
             txtstcg111atmpvalue,
             ltcgwithoutindexationtmpvalue,
             ltcgwithindexationtmpvalue,
             document.getElementById("income_winnings"),
             document.getElementById("tax_normal_rates_1"),
             document.getElementById("tax_normal_rates_2"),
             document.getElementById("winnings_lottery_crossword_2"),
             document.getElementById("long_term_capital_gains_3_2"),
             document.getElementById("short_term_capital_gains_2"),
             document.getElementById("long_term_capital_gains_2_2"), isSimpleCalculation, ltcgcoverd112ucgtmpvalue, document.getElementById("long_term_capital_gains_2"),
             document.getElementById("hiddenid1"), document.getElementById("hiddenid2"),
             document.getElementById("hiddenid3"), document.getElementById("hiddenid4"), document.getElementById("hiddenid5"), document.getElementById("hiddenid6"));

             }

            //Quarter 1

            if (selectedAssYear == "2020-21" || selectedAssYear == "2021-22") {
                txtltcgcoverd112ucg01 = parseInt(getNum(document.getElementById("long_term_gains_3_2").value)) >= maxthreshholdlimitfor112A ? (parseInt(getNum(document.getElementById("long_term_gains_3_2").value)) - maxthreshholdlimitfor112A) : 0
                if (parseInt(getNum(document.getElementById("long_term_gains_3_2").value)) >= maxthreshholdlimitfor112A) {
                    maxthreshholdlimitfor112A = 0;
                }
                else {
                    maxthreshholdlimitfor112A = maxthreshholdlimitfor112A - parseInt(getNum(document.getElementById("long_term_gains_3_2").value));
                }
            }
            txtcgtotaltmpvalue.value = stcgnormalAmount + parseInt(getNum(document.getElementById("short_term_gain2").value)) +
            stcg111aAmount + parseInt(getNum(document.getElementById("short_term_gains_2_1").value)) +
            ltcgwithindexationAmount + parseInt(getNum(document.getElementById("long_term_gains_2").value)) +
            ltcgwithoutindexationAmount + parseInt(getNum(document.getElementById("long_term_gains_2_2").value)) + ltcgcoverd112ucgAmount + txtltcgcoverd112ucg01;
            
            txtstcgnormaltmpvalue.value = stcgnormalAmount + parseInt(getNum(document.getElementById("short_term_gain2").value));
            txtstcg111atmpvalue.value = stcg111aAmount + parseInt(getNum(document.getElementById("short_term_gains_2_1").value));
            ltcgwithindexationtmpvalue.value = ltcgwithindexationAmount + parseInt(getNum(document.getElementById("long_term_gains_2").value));
            ltcgwithoutindexationtmpvalue.value = ltcgwithoutindexationAmount + parseInt(getNum(document.getElementById("long_term_gains_2_2").value));
            ltcgcoverd112ucgtmpvalue.value = ltcgcoverd112ucgAmount + txtltcgcoverd112ucg01;
            
            document.getElementById("net_taxable_income").value = addthousandseprator(calcTotalIncome());

            calcSpecialIncomeTax(selectedResiStatus, selectedAssYear, sAssCategory);
            var nexemptionlimit = exemptionlimit(selectedResiStatus, selectedAssYear, sAssCategory, document.getElementById("select_taxation_11").value);
            var gti = calculationGTI();
            var y = calculationY(gti);

            calculateDatajs(selectedAssYear, selectedAssType, sAssCategory, document.getElementById("net_taxable_income"), selectedResiStatus,
            document.getElementById("income_tax_main"),
            document.getElementById("surcharges"),
            document.getElementById("educational_cess"),
            document.getElementById("health_educational_cess"),
            document.getElementById("total_tax_liability"),

            document.getElementById("ctl00_SPWebPartManager1_g_1a7c992e_28f5_4dff_a553_9a619607f0db_chkUs115BA"), false, false,
            document.getElementById("ctl00_SPWebPartManager1_g_1a7c992e_28f5_4dff_a553_9a619607f0db_chkDomesticNotExceed5Cr"), document.getElementById("select_taxation_11").value, "2",

            document.getElementById("net_taxable_income"), nexemptionlimit,
            document.getElementById("income_agriculture"), y,
            txtstcg111atmpvalue,
            ltcgwithoutindexationtmpvalue,
            ltcgwithindexationtmpvalue,
            document.getElementById("income_winnings"),
            document.getElementById("tax_normal_rates_1"),
            document.getElementById("tax_normal_rates_2"),
            document.getElementById("winnings_lottery_crossword_2"),
            document.getElementById("long_term_capital_gains_3_2"),
            document.getElementById("short_term_capital_gains_2"),
            document.getElementById("long_term_capital_gains_2_2"), isSimpleCalculation, ltcgcoverd112ucgtmpvalue, document.getElementById("long_term_capital_gains_2"),
            document.getElementById("hiddenid1"), document.getElementById("hiddenid2"),
            document.getElementById("hiddenid3"), document.getElementById("hiddenid4"), document.getElementById("hiddenid5"), document.getElementById("hiddenid6"));

           
            //Quarter 2

            if (selectedAssYear == "2020-21" || selectedAssYear == "2021-22") {
                txtltcgcoverd112ucg02 = parseInt(getNum(document.getElementById("long_term_gains_3_3").value)) >= maxthreshholdlimitfor112A ? (parseInt(getNum(document.getElementById("long_term_gains_3_3").value)) - maxthreshholdlimitfor112A) : 0
                if (parseInt(getNum(document.getElementById("long_term_gains_3_3").value)) >= maxthreshholdlimitfor112A) {
                    maxthreshholdlimitfor112A = 0;
                }
                else {
                    maxthreshholdlimitfor112A = maxthreshholdlimitfor112A - parseInt(getNum(document.getElementById("long_term_gains_3_3").value));
                }
            }
            txtcgtotaltmpvalue.value = stcgnormalAmount + parseInt(getNum(document.getElementById("short_term_gain2").value)) + parseInt(getNum(document.getElementById("short_term_gain3").value)) +
            stcg111aAmount + parseInt(getNum(document.getElementById("short_term_gains_2_1").value)) + parseInt(getNum(document.getElementById("short_term_gains_2_2").value)) +
            ltcgwithindexationAmount + parseInt(getNum(document.getElementById("long_term_gains_2").value)) + parseInt(getNum(document.getElementById("long_term_gains_3").value)) +
            ltcgwithoutindexationAmount + parseInt(getNum(document.getElementById("long_term_gains_2_2").value)) + parseInt(getNum(document.getElementById("long_term_gains_2_3").value)) + ltcgcoverd112ucgAmount + txtltcgcoverd112ucg01 + txtltcgcoverd112ucg02;

            txtstcgnormaltmpvalue.value = stcgnormalAmount + parseInt(getNum(document.getElementById("short_term_gain2").value)) + parseInt(getNum(document.getElementById("short_term_gain3").value));
            txtstcg111atmpvalue.value = stcg111aAmount + parseInt(getNum(document.getElementById("short_term_gains_2_1").value)) + parseInt(getNum(document.getElementById("short_term_gains_2_2").value));
            ltcgwithindexationtmpvalue.value = ltcgwithindexationAmount + parseInt(getNum(document.getElementById("long_term_gains_2").value)) + parseInt(getNum(document.getElementById("long_term_gains_3").value));
            ltcgwithoutindexationtmpvalue.value = ltcgwithoutindexationAmount + parseInt(getNum(document.getElementById("long_term_gains_2_2").value)) + parseInt(getNum(document.getElementById("long_term_gains_2_3").value));
            ltcgcoverd112ucgtmpvalue.value = ltcgcoverd112ucgAmount + txtltcgcoverd112ucg01 + txtltcgcoverd112ucg02;

            document.getElementById("net_taxable_income").value = addthousandseprator(calcTotalIncome());

            calcSpecialIncomeTax(selectedResiStatus, selectedAssYear, sAssCategory);
            var nexemptionlimit = exemptionlimit(selectedResiStatus, selectedAssYear, sAssCategory, document.getElementById("select_taxation_11").value);
            var gti = calculationGTI();
            var y = calculationY(gti);
            calculateDatajs(selectedAssYear, selectedAssType, sAssCategory, document.getElementById("net_taxable_income"), selectedResiStatus,
            document.getElementById("income_tax_main"),
            document.getElementById("surcharges"),
            document.getElementById("educational_cess"),
            document.getElementById("health_educational_cess"),
            document.getElementById("total_tax_liability"),
            document.getElementById("ctl00_SPWebPartManager1_g_1a7c992e_28f5_4dff_a553_9a619607f0db_chkUs115BA"), false, false,
            document.getElementById("ctl00_SPWebPartManager1_g_1a7c992e_28f5_4dff_a553_9a619607f0db_chkDomesticNotExceed5Cr"), document.getElementById("select_taxation_11").value, "2",
            document.getElementById("net_taxable_income"), nexemptionlimit,
            document.getElementById("income_agriculture"), y,
            txtstcg111atmpvalue,
            ltcgwithoutindexationtmpvalue,
            ltcgwithindexationtmpvalue,
            document.getElementById("income_winnings"),
            document.getElementById("tax_normal_rates_1"),
            document.getElementById("tax_normal_rates_2"),
            document.getElementById("winnings_lottery_crossword_2"),
            document.getElementById("long_term_capital_gains_3_2"),
            document.getElementById("short_term_capital_gains_2"),
            document.getElementById("long_term_capital_gains_2_2"), isSimpleCalculation, ltcgcoverd112ucgtmpvalue, document.getElementById("long_term_capital_gains_2"),
            document.getElementById("hiddenid1"), document.getElementById("hiddenid2"),
            document.getElementById("hiddenid3"), document.getElementById("hiddenid4"), document.getElementById("hiddenid5"), document.getElementById("hiddenid6"));

            //Quarter 3

            if (selectedAssYear == "2020-21" || selectedAssYear == "2021-22") {
                txtltcgcoverd112ucg03 = parseInt(getNum(document.getElementById("long_term_gains_3_4").value)) >= maxthreshholdlimitfor112A ? (parseInt(getNum(document.getElementById("long_term_gains_3_4").value)) - maxthreshholdlimitfor112A) : 0
                if (parseInt(getNum(document.getElementById("long_term_gains_3_4").value)) >= maxthreshholdlimitfor112A) {
                    maxthreshholdlimitfor112A = 0;
                }
                else {
                    maxthreshholdlimitfor112A = maxthreshholdlimitfor112A - parseInt(getNum(document.getElementById("long_term_gains_3_4").value));
                }
            }
            txtcgtotaltmpvalue.value = stcgnormalAmount + parseInt(getNum(document.getElementById("short_term_gain2").value)) + parseInt(getNum(document.getElementById("short_term_gain3").value)) + parseInt(getNum(document.getElementById("short_term_gain4").value)) +
            stcg111aAmount + parseInt(getNum(document.getElementById("short_term_gains_2_1").value)) + parseInt(getNum(document.getElementById("short_term_gains_2_2").value)) + parseInt(getNum(document.getElementById("short_term_gains_2_3").value)) +
            ltcgwithindexationAmount + parseInt(getNum(document.getElementById("long_term_gains_2").value)) + parseInt(getNum(document.getElementById("long_term_gains_3").value)) + parseInt(getNum(document.getElementById("long_term_gains_4").value)) +
            ltcgwithoutindexationAmount + parseInt(getNum(document.getElementById("long_term_gains_2_2").value)) + parseInt(getNum(document.getElementById("long_term_gains_2_3").value)) + parseInt(getNum(document.getElementById("long_term_gains_2_4").value)) +
            ltcgcoverd112ucgAmount + txtltcgcoverd112ucg01 + txtltcgcoverd112ucg02 + txtltcgcoverd112ucg03;

            txtstcgnormaltmpvalue.value = stcgnormalAmount + parseInt(getNum(document.getElementById("short_term_gain2").value)) + parseInt(getNum(document.getElementById("short_term_gain3").value)) + parseInt(getNum(document.getElementById("short_term_gain4").value));
            txtstcg111atmpvalue.value = stcg111aAmount + parseInt(getNum(document.getElementById("short_term_gains_2_1").value)) + parseInt(getNum(document.getElementById("short_term_gains_2_2").value)) + parseInt(getNum(document.getElementById("short_term_gains_2_3").value));
            ltcgwithindexationtmpvalue.value = ltcgwithindexationAmount + parseInt(getNum(document.getElementById("long_term_gains_2").value)) + parseInt(getNum(document.getElementById("long_term_gains_3").value)) + parseInt(getNum(document.getElementById("long_term_gains_4").value));
            ltcgwithoutindexationtmpvalue.value = ltcgwithoutindexationAmount + parseInt(getNum(document.getElementById("long_term_gains_2_2").value)) + parseInt(getNum(document.getElementById("long_term_gains_2_3").value)) + parseInt(getNum(document.getElementById("long_term_gains_2_4").value));
            ltcgcoverd112ucgtmpvalue.value = ltcgcoverd112ucgAmount + txtltcgcoverd112ucg01 + txtltcgcoverd112ucg02 + txtltcgcoverd112ucg03;

            document.getElementById("net_taxable_income").value = addthousandseprator(calcTotalIncome());

            calcSpecialIncomeTax(selectedResiStatus, selectedAssYear, sAssCategory);
            var nexemptionlimit = exemptionlimit(selectedResiStatus, selectedAssYear, sAssCategory, document.getElementById("select_taxation_11").value);
            var gti = calculationGTI();
            var y = calculationY(gti);
            calculateDatajs(selectedAssYear, selectedAssType, sAssCategory, document.getElementById("net_taxable_income"), selectedResiStatus,
            document.getElementById("income_tax_main"),
            document.getElementById("surcharges"),
            document.getElementById("educational_cess"),
            document.getElementById("health_educational_cess"),
            document.getElementById("total_tax_liability"),
            document.getElementById("ctl00_SPWebPartManager1_g_1a7c992e_28f5_4dff_a553_9a619607f0db_chkUs115BA"), false, false,
            document.getElementById("ctl00_SPWebPartManager1_g_1a7c992e_28f5_4dff_a553_9a619607f0db_chkDomesticNotExceed5Cr"), document.getElementById("select_taxation_11").value, "2",
            document.getElementById("net_taxable_income"), nexemptionlimit,
            document.getElementById("income_agriculture"), y,
            txtstcg111atmpvalue,
            ltcgwithoutindexationtmpvalue,
            ltcgwithindexationtmpvalue,
            document.getElementById("income_winnings"),
            document.getElementById("tax_normal_rates_1"),
            document.getElementById("tax_normal_rates_2"),
            document.getElementById("winnings_lottery_crossword_2"),
            document.getElementById("long_term_capital_gains_3_2"),
            document.getElementById("short_term_capital_gains_2"),
            document.getElementById("long_term_capital_gains_2_2"), isSimpleCalculation, ltcgcoverd112ucgtmpvalue, document.getElementById("long_term_capital_gains_2"),
            document.getElementById("hiddenid1"), document.getElementById("hiddenid2"),
            document.getElementById("hiddenid3"), document.getElementById("hiddenid4"), document.getElementById("hiddenid5"), document.getElementById("hiddenid6"));
            // end of 234abc interest calc

            txtcgtotaltmpvalue.value = parseInt(getNum(document.getElementById("capital_gains").value));
            txtstcgnormaltmpvalue.value = parseInt(getNum(document.getElementById("short_term_gain_total").value));
            txtstcg111atmpvalue.value = parseInt(getNum(document.getElementById("short_term_gains_2_5").value));
            ltcgwithindexationtmpvalue.value = parseInt(getNum(document.getElementById("long_term_gains_total").value));
            ltcgwithoutindexationtmpvalue.value = parseInt(getNum(document.getElementById("long_term_gains_2_total").value));
            ltcgcoverd112ucgtmpvalue.value = parseInt(getNum(document.getElementById("long_term_gains_3_total").value));

            document.getElementById("net_taxable_income").value = addthousandseprator(calcTotalIncome());
            calcSpecialIncomeTax(selectedResiStatus, selectedAssYear, sAssCategory);
            var nexemptionlimit = exemptionlimit(selectedResiStatus, selectedAssYear, sAssCategory, document.getElementById("select_taxation_11").value);
            var gti = calculationGTI();
            var y = calculationY(gti);
            calculateDatajs(selectedAssYear, selectedAssType, sAssCategory, document.getElementById("net_taxable_income"), selectedResiStatus,
            document.getElementById("income_tax_main"),
            document.getElementById("surcharges"),
            document.getElementById("educational_cess"),
            document.getElementById("health_educational_cess"),
            document.getElementById("total_tax_liability"),
            document.getElementById("ctl00_SPWebPartManager1_g_1a7c992e_28f5_4dff_a553_9a619607f0db_chkUs115BA"), false, false,
            document.getElementById("ctl00_SPWebPartManager1_g_1a7c992e_28f5_4dff_a553_9a619607f0db_chkDomesticNotExceed5Cr"), document.getElementById("select_taxation_11").value, "2",
            document.getElementById("net_taxable_income"), nexemptionlimit,
            document.getElementById("income_agriculture"), y,
            txtstcg111atmpvalue,
            ltcgwithoutindexationtmpvalue,
            ltcgwithindexationtmpvalue,
            document.getElementById("income_winnings"),
            document.getElementById("tax_normal_rates_1"),
            document.getElementById("tax_normal_rates_2"),
            document.getElementById("winnings_lottery_crossword_2"),
            document.getElementById("long_term_capital_gains_3_2"),
            document.getElementById("short_term_capital_gains_2"),
            document.getElementById("long_term_capital_gains_2_2"), isSimpleCalculation, ltcgcoverd112ucgtmpvalue, document.getElementById("long_term_capital_gains_2"),
            document.getElementById("hiddenid1"), document.getElementById("hiddenid2"),
        document.getElementById("hiddenid3"), document.getElementById("hiddenid4"), document.getElementById("hiddenid5"), document.getElementById("hiddenid6"));
        }
        else {

            calculateDatajs(selectedAssYear, selectedAssType, sAssCategory, document.getElementById("net_taxable_income"), selectedResiStatus,
            document.getElementById("income_tax_main"),
            document.getElementById("surcharges"),
            document.getElementById("educational_cess"),
            document.getElementById("health_educational_cess"),
            document.getElementById("total_tax_liability"), document.getElementById("ctl00_SPWebPartManager1_g_1a7c992e_28f5_4dff_a553_9a619607f0db_chkUs115BA"), false, false,
            document.getElementById("ctl00_SPWebPartManager1_g_1a7c992e_28f5_4dff_a553_9a619607f0db_chkDomesticNotExceed5Cr"), document.getElementById("select_taxation_11").value, "2", isSimpleCalculation
            );
        }
    }

    function calculationY(gti) {
        var y = calcYjs(document.getElementById("income_intrest"),
        document.getElementById("income_commision"),
        document.getElementById("income_winnings"),
        ltcgwithindexationtmpvalue,
        ltcgwithoutindexationtmpvalue, gti, ltcgcoverd112ucgtmpvalue);
        return y;
    }

    function calcSpecialIncomeTax(selectedResiStatus, selectedAssYear, sAssCategory) {
        //debugger;
        var gti = calculationGTI();
        var y = calculationY(gti);

        var nexemptionlimit = exemptionlimit(selectedResiStatus, selectedAssYear, sAssCategory, document.getElementById("select_taxation_11").value);
        var totalnettaxableIncome = calcTotalIncome();
        calcSpecialIncomeTaxjs(document.getElementById("income_winnings"),
        txtstcg111atmpvalue,
        document.getElementById("net_taxable_income"),
        ltcgwithindexationtmpvalue,
        ltcgwithoutindexationtmpvalue,
        document.getElementById("winnings_lottery_crossword_1"),
        document.getElementById("short_term_capital_gains_1"),
        document.getElementById("long_term_capital_gains_3_1"),
        document.getElementById("long_term_capital_gains_2_1"),
        document.getElementById("winnings_lottery_crossword_2"),
        document.getElementById("long_term_capital_gains_3_2"),
        document.getElementById("short_term_capital_gains_2"),
        document.getElementById("long_term_capital_gains_2_2"),
        y, nexemptionlimit, gti, selectedResiStatus, totalnettaxableIncome,
        ltcgcoverd112ucgtmpvalue, document.getElementById("long_term_capital_gains_1"), document.getElementById("long_term_capital_gains_2"),
        document.getElementById("hiddenid1"), document.getElementById("hiddenid2"),
        document.getElementById("hiddenid3"), document.getElementById("hiddenid4"),
        document.getElementById("hiddenid5"), document.getElementById("hiddenid6"));
    }

    function calcHP() {
        //debugger;
        try {
            var selectedAssYear = document.getElementById("select_assessment").value;
            if (selectedAssYear == "2022-23") selectedAssYear = "2021-22";
            var selectedAssType = document.getElementById("select_taxpayer").value;
            if (selectedAssType == "Individual") {
                calcHPjs(selectedAssYear, document.getElementById("income_house_property"),
                document.getElementById("intrest_house"),
                document.getElementById("net_annual_value"),
                document.getElementById("annual_letable_recieved"),
                document.getElementById("muncipal_tax_paid"),
                document.getElementById("unrealised_rent"),
                document.getElementById("standard_deduction"),
                document.getElementById("income_letout"),
                document.getElementById("interest_housing_loan"),
                document.getElementById("income_house_show_details"), document.getElementById("select_taxation_11").value);
                calculatededuction();
                calculateResult();
            }
        }
        catch (e) {
            alert('An error has occurred: Module-calcHP :' + e.message)
        }
    }

    function calculationCG() {
        calcCGjs(document.getElementById("capital_gains"),
        document.getElementById("short_term_gain_total"),
        document.getElementById("short_term_gains_2_5"),
        document.getElementById("long_term_gains_total"),
        document.getElementById("long_term_gains_2_total"), document.getElementById("long_term_gains_3_total"));
        calculatededuction();
        calculateResult();
    }

    function stcgnormalTotalCalculation() {
        document.getElementById("short_term_gain_total").value = parseInt(getNum(document.getElementById("short_term_gain1").value)) +
            parseInt(getNum(document.getElementById("short_term_gain2").value)) +
            parseInt(getNum(document.getElementById("short_term_gain3").value)) +
            parseInt(getNum(document.getElementById("short_term_gain4").value)) +
            parseInt(getNum(document.getElementById("short_term_gain5").value));
        calculationCG();
    }
    function stcg111atotalCalculation() {
        document.getElementById("short_term_gains_2_5").value = parseInt(getNum(document.getElementById("short_term_gains_total2").value)) +
            parseInt(getNum(document.getElementById("short_term_gains_2_1").value)) +
            parseInt(getNum(document.getElementById("short_term_gains_2_2").value)) +
            parseInt(getNum(document.getElementById("short_term_gains_2_3").value)) +
            parseInt(getNum(document.getElementById("short_term_gains_2_4").value));
        calculationCG();
    }
    function ltcgwithindexationtotalCalculation() {
        document.getElementById("long_term_gains_total").value = parseInt(getNum(document.getElementById("long_term_gains_1").value)) +
        parseInt(getNum(document.getElementById("long_term_gains_2").value)) +
        parseInt(getNum(document.getElementById("long_term_gains_3").value)) +
        parseInt(getNum(document.getElementById("long_term_gains_4").value)) +
        parseInt(getNum(document.getElementById("long_term_gains_5").value));
            calculationCG();
        }

    function ltcgwithoutindexationtotalCalculation() {
            document.getElementById("long_term_gains_2_total").value = parseInt(getNum(document.getElementById("long_term_gains_2_1").value)) +
        parseInt(getNum(document.getElementById("long_term_gains_2_2").value)) +
        parseInt(getNum(document.getElementById("long_term_gains_2_3").value)) +
        parseInt(getNum(document.getElementById("long_term_gains_2_4").value)) +
        parseInt(getNum(document.getElementById("long_term_gains_2_5").value));

        calculationCG();
    }

    function txtltcgcoverd112ucgtotalCalculation() {
        document.getElementById("long_term_gains_3_total").value = parseInt(getNum(document.getElementById("long_term_gains_3_1").value)) +
       parseInt(getNum(document.getElementById("long_term_gains_3_2").value)) +
        parseInt(getNum(document.getElementById("long_term_gains_3_3").value)) +
        parseInt(getNum(document.getElementById("long_term_gains_3_4").value)) +
        parseInt(getNum(document.getElementById("long_term_gains_3_5").value));

        calculationCG();
    }
    
    function winningfromLotterytotalCalculation() {
        document.getElementById("income_winnings").value = parseInt(getNum(document.getElementById("income_lottery_1").value)) +
       parseInt(getNum(document.getElementById("income_lottery_2").value)) +
        parseInt(getNum(document.getElementById("income_lottery_3").value)) +
        parseInt(getNum(document.getElementById("income_lottery_4").value)) +
        parseInt(getNum(document.getElementById("income_lottery_5").value));
        calcOS();
        //calculationCG();
    }
    
    function dividendincomeInExcessOf10lakhtotalCalculation() {
        document.getElementById("income_excess_10lakh_total").value = parseInt(getNum(document.getElementById("income_excess_10lakh_1").value)) +
        parseInt(getNum(document.getElementById("income_excess_10lakh_2").value)) +
        parseInt(getNum(document.getElementById("income_excess_10lakh_3").value)) +
        parseInt(getNum(document.getElementById("income_excess_10lakh_4").value)) +
        parseInt(getNum(document.getElementById("income_excess_10lakh_5").value));
        calcOS();
        //calculationCG();
    }
    
    function calcOS() {
        calcOSjs(document.getElementById("income_other_source"),
        document.getElementById("income_intrest"),
        document.getElementById("income_commision"),
        document.getElementById("income_winnings"), document.getElementById("income_excess_10lakh_total"));
        calculatededuction();
        calculateResult();
    }

    function calculatededuction() {
       // debugger;
        var ngti = calculationGTI();
        calcdeductionjs(document.getElementById("select_resident"),
        document.getElementById("select_assessment"),
        document.getElementById("deductions_longterm_bond"),
        document.getElementById("deductions_equity_scheme"),
        document.getElementById("deductions_medi_claim"),
        document.getElementById("deductions_intrest_saving_acc"),
        document.getElementById("deductions_intrest_deposits"),
        document.getElementById("deductions_loan_intrest_resedential"),
        document.getElementById("deductions_maintenance"),
        document.getElementById("deductions_disability"),
        document.getElementById("deductions_lic"),
        document.getElementById("deductions_annuity_plan"),
        document.getElementById("deductions_ppf"),
        document.getElementById("deductions_nsc"),
        document.getElementById("deductions_ulip"),
        document.getElementById("deductions_pension_mf/uti"),
        document.getElementById("deductions_housing_repayment"),
        document.getElementById("deductions_tutuionfees"),
        document.getElementById("deductions_fixed_deposit"),
        document.getElementById("deductions_npf"),
        document.getElementById("deductions_others"),
        document.getElementById("deductions_employee_nps"),
        document.getElementById("deductions_employers_nps"),
        document.getElementById("deductions_total_1"),
        document.getElementById("deductions_total"),
        document.getElementById("deductions_donations"),
        document.getElementById("deductions_loan_education"),
        document.getElementById("deductions_others_1"),
        document.getElementById("deductions_additional_nps"),
        document.getElementById("deductions_payment_medi"),
        document.getElementById("deductions_intrest_loan_house"),
        document.getElementById("deductions_intrest_electric_vehicle"),
        document.getElementById("deductions_sukanya_acc"), ngti, document.getElementById("deductions_intrest_deposits"));
        calculateResult();
    }

    function calc80dd() {
        //debugger;
        calc80ddjs(document.getElementById("select_assessment"), document.getElementById("deductions_check_80dd"),
            document.getElementById("deductions_check_disabilty_1"),
            document.getElementById("deductions_maintenance"));
        calculatededuction();
    }

    function calc80u() {
       // debugger;
        calc80ujs(document.getElementById("select_assessment"), document.getElementById("deductions_check_80u"),
            document.getElementById("deductions_check_disabilty_2"),
            document.getElementById("deductions_disability"));
        calculatededuction();
    }

        //        function calculateNetTaxableIncome() {
        //            document.getElementById("net_taxable_income").value = addthousandseprator(calcTotalIncome());
    //            calculateData();
    //        }

    function calcTotalIncome() {
        var gti = calculationGTI();
        var nettaxableincome = calcTotalIncomejs(document.getElementById("income_winnings"),
            txtstcg111atmpvalue,
            ltcgwithindexationtmpvalue,
            ltcgwithoutindexationtmpvalue,
            document.getElementById("deductions_total"), gti, ltcgcoverd112ucgtmpvalue);
        return nettaxableincome;
    }

    function calculationGTI() {
        try {
            var gti = 0;
            var lotteryincome = 0;

            var selectedAssYear = document.getElementById("select_assessment").value;
            if (selectedAssYear == "2022-23") selectedAssYear = "2021-22";
            var hP = parseInt(getNum(document.getElementById("income_house_show_details").value));
            if (selectedAssYear == "2018-19" || selectedAssYear == "2019-20" || selectedAssYear == "2020-21" || selectedAssYear == "2021-22") {
                if (hP < -200000) {
                    hP = -200000;
                }
            }

            lotteryincome = parseInt(getNum(document.getElementById("income_winnings").value));
            gti = parseInt(getNum(document.getElementById("income_salary").value)) + hP +
            txtcgtotaltmpvalue.value + parseFloat(getNum(document.getElementById("income_other_source").value)) +
            parseFloat(getNum(document.getElementById("income_business").value));

            if (gti < 0) { gti = 0; }
            if (gti < lotteryincome) { gti = lotteryincome; }
            return gti;
        } catch (e) {
            alert('An error has occurred: Module-calculationGTI:' + e.message)
        }
    }
    function TickOnlyOne115BA() {
        document.getElementById("ctl00_SPWebPartManager1_g_1a7c992e_28f5_4dff_a553_9a619607f0db_chkUs115BA").checked = false;
    }

    function TickOnlyOne() {
        document.getElementById("ctl00_SPWebPartManager1_g_1a7c992e_28f5_4dff_a553_9a619607f0db_chkDomesticNotExceed5Cr").checked = false;
    }
    function Claertxt80ttaORtxt80ttbData() {
        //debugger;
        var selectedAssYear = document.getElementById("select_assessment").value;
        if (selectedAssYear == "2022-23") selectedAssYear = "2021-22";
        var sAssCategory = document.getElementById("select_gender").value;
        var selectedResiStatus = document.getElementById("select_resident").value;

        //Logic implimented according to AY 2019-20
        if (selectedAssYear == "2019-20" || selectedAssYear == "2020-21" || selectedAssYear == "2021-22") {
            $("#div_interest_on_deposit").show();
            $("#div_interest_deposit_saving_account").hide();
            document.getElementById("deductions_intrest_saving_acc").value = "";
            $("#divtxtEduCess").hide();
            $("#divLiteral67").hide();
            $("#divLiteral82").show();
            $("#divLiteral7").hide();
            switch (selectedAssYear) {
                case "2019-20":
                    $("#div_income_deduction_40000").show();
                    $("#div_income_deduction_50000").hide();
                    $("#div_income_before_deduction").hide();
                    break;
                case "2020-21":
                    $("#div_income_deduction_40000").hide();
                    $("#div_income_deduction_50000").show();
                    $("#div_income_before_deduction").hide();
                    break;
                case "2021-22":
                    $("#div_income_deduction_40000").hide();
                    if (document.getElementById("select_taxation_11").value == "1") {
                        $("#div_income_deduction_50000").hide();
                        $("#div_income_before_deduction").show();
                    }
                    else {
                        $("#div_income_deduction_50000").show();
                        $("#div_income_before_deduction").hide();
                    }

                    break;
                default:
                    break;
            }
        }
        else {
            $("#div_interest_on_deposit").hide();
            $("#div_interest_deposit_saving_account").show();
            document.getElementById("deductions_intrest_deposits").value = "";
            $("#divtxtEduCess").show();
            $("#divLiteral67").show();
            $("#divLiteral82").hide();
            $("#divLiteral7").show();
            $("#div_income_deduction_40000").hide();
            $("#div_income_deduction_50000").hide();
            $("#div_income_before_deduction").hide();
        }

        //Logic implimented according to AY 2019-20
        if ((selectedAssYear == "2019-20" || selectedAssYear == "2020-21" || selectedAssYear == "2021-22") && (sAssCategory == "Senior Citizen" || sAssCategory == "Super Senior Citizen") && (selectedResiStatus == "Resident" || selectedResiStatus == "Not Ordinary Resident")) {
            $("#div_interest_on_deposit").show();
            document.getElementById("deductions_intrest_saving_acc").value = "";
            $("#div_interest_deposit_saving_account").hide();
        }
        else if ((selectedAssYear == "2019-20" || selectedAssYear == "2020-21" || selectedAssYear == "2021-22") && (sAssCategory == "Senior Citizen" || sAssCategory == "Super Senior Citizen") && selectedResiStatus == "Non-Resident") {
            document.getElementById("deductions_intrest_deposits").value = "";
            $("#div_interest_on_deposit").hide();
            $("#div_interest_deposit_saving_account").show();
        }
        else if ((selectedAssYear == "2019-20" || selectedAssYear == "2020-21" || selectedAssYear == "2021-22") && (sAssCategory == "Male" || sAssCategory == "Female")) {
            document.getElementById("deductions_intrest_deposits").value = "";
            $("#div_interest_on_deposit").hide();
            $("#div_interest_deposit_saving_account").show();
        }
    }
    function cleardeductioninputvalue() {

        document.getElementById("deductions_lic").value = "";
        document.getElementById("deductions_annuity_plan").value = "";
        document.getElementById("deductions_ppf").value = "";
        document.getElementById("deductions_nsc").value = "";
        document.getElementById("deductions_ulip").value = "";
        document.getElementById("deductions_pension_mf/uti").value = "";
        document.getElementById("deductions_housing_repayment").value = "";
        document.getElementById("deductions_tutuionfees").value = "";
        document.getElementById("deductions_fixed_deposit").value = "";
        document.getElementById("deductions_npf").value = "";
        document.getElementById("deductions_employee_nps").value = "";
        document.getElementById("deductions_additional_nps").value = "";

        document.getElementById("deductions_longterm_bond").value = "";
        document.getElementById("deductions_equity_scheme").value = "";
        document.getElementById("deductions_sukanya_acc").value = "";
        document.getElementById("deductions_others").value = "";
        document.getElementById("deductions_total_1").value = "";
        document.getElementById("deductions_medi_claim").value = "";
        document.getElementById("deductions_payment_medi").value = "";
        document.getElementById("deductions_intrest_loan_house").value = "";
        document.getElementById("deductions_intrest_electric_vehicle").value = "";
        document.getElementById("deductions_donations").value = "";
        document.getElementById("deductions_maintenance").value = "";
        document.getElementById("deductions_loan_education").value = "";
        document.getElementById("deductions_loan_intrest_resedential").value = "";
        document.getElementById("deductions_disability").value = "";
        document.getElementById("deductions_intrest_saving_acc").value = "";
        document.getElementById("deductions_intrest_deposits").value = "";
        document.getElementById("deductions_others_1").value = "";
    }
