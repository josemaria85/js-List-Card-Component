#Guia Para Usar El componente

##Parametro [Datos]
Es el array con los datos que se visualizaran en las cards
```
ejemplo:[
  {
    "id":1,
    "Nombre":"Juan Jose"// se pondra como pie de foto
    "Foto":"url"//si hay una foto
  }
]
```
##Parametro [titulo]
Es el titulo base para mostrar en la card le seguira el id del objeto

##evento (ver) 
recoge el elemento pulsado y nos trae un obeto con la operacion realizada y los datos del objeto seleccionado
```
{
    "operacion": "[Ver/Editar/Borrar]",
    "dato": {
        "Id": 1,
        "Nombre": "Mariko",
        "Apellidos": "Pitts",
        "Email": "lectus@nequeNullam.org",
        "Foto": "https://www.dzoom.org.es/wp-content/uploads/2010/09/mirada-ojos-encuadre-primer-plano-sexy-810x540.jpg"
    }
}
```

##etiqueta html completa
```
<js-list-card [Datos]="datos" [titulo]="titulo" (ver)="Ver($event)"></js-list-card>
```
