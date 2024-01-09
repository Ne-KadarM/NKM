from django.shortcuts import redirect, render
from django.http.response import HttpResponse,HttpResponseNotFound
from django.urls import reverse
import matplotlib.pyplot as plt
from django.db.models import Q
from .models import table2005,table2006,table2007,table2008,table2009,table2010,table2011,table2012,table2013,table2014,table2015,table2016,table2017,table2018,table2019,table2020,table2020,table2021,table2022,tableall_year

def Anasayfa(request):

    
    data_year_5 = table2005.objects.all().order_by("-happiness_score")
    data_year_6 = table2006.objects.all().order_by("-happiness_score")
    data_year_7 = table2007.objects.all().order_by("-happiness_score")
    data_year_8 = table2008.objects.all().order_by("-happiness_score")
    data_year_9 = table2009.objects.all().order_by("-happiness_score")
    data_year_10 = table2010.objects.all().order_by("-happiness_score")
    data_year_11 = table2011.objects.all().order_by("-happiness_score")
    data_year_12 = table2012.objects.all().order_by("-happiness_score")
    data_year_13 = table2013.objects.all().order_by("-happiness_score")
    data_year_14 = table2014.objects.all().order_by("-happiness_score")
    data_year_15 = table2015.objects.all().order_by("-happiness_score")
    data_year_16 = table2016.objects.all().order_by("-happiness_score")
    data_year_17 = table2017.objects.all().order_by("-happiness_score")
    data_year_18 = table2018.objects.all().order_by("-happiness_score")
    data_year_19 = table2019.objects.all().order_by("-happiness_score")
    data_year_20 = table2020.objects.all().order_by("-happiness_score")
    data_year_21 = table2021.objects.all().order_by("-happiness_score")
    data_year_22 = table2022.objects.all().order_by("-happiness_score")
    
    
    context={"data_year_5": data_year_5,"data_year_6": data_year_6,"data_year_7": data_year_7,
                "data_year_8": data_year_8,"data_year_9": data_year_9,"data_year_10": data_year_10,
                "data_year_11": data_year_11,"data_year_12": data_year_12,"data_year_13": data_year_13,
                "data_year_14": data_year_14,"data_year_15": data_year_15,"data_year_16": data_year_16,
                "data_year_17": data_year_17,"data_year_18": data_year_18,"data_year_19": data_year_19,
                "data_year_20": data_year_20,"data_year_21": data_year_21,"data_year_22": data_year_22 }

    return render(request, 'Anasayfa.html', context)
              

    
#ABD-Almanya-Brezilya-Endonezya-Fransa-Gana-GüneyKore-Gürcistan-Hindistan-Hollanda-ingiltere
#İsveç-japonya-Kamerun-Kanada-Kenya-Meksika-Rusya-Türkiye-Zellanda
def getProductByCountry(request, country):
    yil=[]
    endeks=[]
    yasam=[]
    destek=[]
    hasila=[]
    arr=['ABD','Almanya','Brezilya','Endonezya','Fransa','Gana','GuneyKore','Gurcistan','Hindistan'
         ,'Hollanda','Ingiltere','Isvec','Japonya','Kamerun','Kanada','Kenya','Meksika'
         ,'Rusya','Turkiye','YeniZelanda'] 
    if country in arr:
            degerler=tableall_year.objects.filter(Q(country_name=country) & Q(year=2022)).all()
            years = tableall_year.objects.filter(country_name=country).all().order_by("-year")
            score = tableall_year.objects.filter(country_name=country).all().order_by("-happiness_score")
            life = tableall_year.objects.filter(country_name=country).all().order_by("-healthy_life_expectancy_at_birth")
            gsyih=tableall_year.objects.filter(country_name=country).all().order_by('-log_gdp_per_capita')
            support=tableall_year.objects.filter(country_name=country).all().order_by('-social_support')
            for i in years:
                yil.append(i.year)    
            for i in score:
                endeks.append(i.happiness_score) 
            for i in life:
                yasam.append(i.healthy_life_expectancy_at_birth)
            for i in gsyih:
                hasila.append(i.log_gdp_per_capita)
            for i in support:
                destek.append(i.social_support)
            
            #Yıllara göre mutluluk skorlarının görselleştirildiği grafiğin oluşturulması ve Ulkeİsmi_score.png dosyasına kaydedilmesi
            
            plt.figure()    
            plt.plot(yil,endeks)
            plt.xlabel("Yıllar")
            plt.ylabel("Mutluluk Endeksleri")
            plt.savefig('static/img/'+country+'_score.png')
            
            
            #Yıllara göre Sağlıklı yaşam sürelerinin görselleştirildiği grafiğin oluşturulması ve Ulkeİsmi_life.png dosyasına kaydedilmesi
            
            plt.figure()    
            
            plt.bar(yil,yasam)
            plt.xlabel("Yıllar")
            plt.ylabel("Sağlıklı yaşam beklentileri")
            plt.savefig('static/img/'+country+'_life.png')
            
            
            #Yıllara göre GSYH değerlerinin görselleştirildiği grafiğin oluşturulması ve Ulkeİsmi_gsyih.png dosyasına kaydedilmesi
            
            plt.figure()    
            
            plt.plot(yil,hasila)
            plt.xlabel("Yıllar")
            plt.ylabel("Gelirler")
            plt.savefig('static/img/'+country+'_gsyih.png')
            
            
            #Yıllara göre sosyal destek değerlerinin görselleştirildiği grafiğin oluşturulması ve Ulkeİsmi_support.png dosyasına kaydedilmesi
            
            plt.figure()    
            
            plt.plot(yil,destek)
            plt.xlabel("Yıllar")
            plt.ylabel("Sosyal Destek")
            plt.savefig('static/img/'+country+'_support.png')
            plt.close()
          
            context={ 
                "degerler":degerler,
                "score_url":('static/img/'+country+'_score.png'),
                "life_url": ('static/img/'+country+'_life.png'),
                "gsyih_url":('static/img/'+country+'_gsyih.png'),
                "support_url":('static/img/'+country+'_support.png')      
            }    
            
            return render(request, ''+country+'.html',context)
    else:
        return HttpResponseNotFound()
