# OneCatalog
Thats the Repo for the prototype of the Catalog
Here we can run a tool to add Products in JSON-format.
To do this, connect your Device to the Chronos Network.
Than you have to start the Server on Raspberry Pi.
On Desktop you will find a folder OneCatalog, go in there twice and then when you find the app.py.
Open the Terminal and start the Server with
## python -m uvicorn main:app --reload --port 8000 --host 0.0.0.0

Now you can open your Browser from your own device and in your browser you can navigate to
## http://192.168.202.100:8000/

Insert some new Procuts and in the data.json which you can find on the Raspberry Pi beside the app.py, you will see your products.

## Please convert the json file into the excel to help Falko and Thorsten
