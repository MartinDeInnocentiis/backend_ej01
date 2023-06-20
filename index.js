
//SE CREA LA SIGUIENTE CLASE MANJADORA DE PRODUCTOS, QUE COMIENZA CON UN ARRAY VACIO.
class ProductManager {
    products;
    constructor() {
        this.products = [];
    }
    //EL METODO ADDPRODUCT RECIBE LOS PARAMETROS SEÑALADOS Y CREA UN NUEVO PRODUCTO (INSTANCIA LA CLASE ANTERIOR).
    //LUEGO, LO PUSHEA AL ARRAY VACÍO DE PRODUCTOS, O SEA, LO AGREGA.
    static correlativoId = 0;
    addProduct(
        title, description, price, thumbnail, code, stock
    ) {
        //SE VALIDA QUE TODOS LOS CAMPOS ESTEN COMPLETOS.
        if (
            title == undefined ||
            description == undefined ||
            price == undefined ||
            thumbnail == undefined ||
            code == undefined ||
            stock == undefined
        ) {
            throw new Error("All the fields must be filled.")
        }

        //SE VALIDA QUE NO SE REPITA EL CAMPO CODE.
        let codeExists = this.products.some((dato) => dato.code == code);
        if (codeExists) {
            throw new Error("Entered code already exists.");
        } else {
            //CADA VEZ QUE SE CREA UN PRODUCTO, EL ID (AUTOINCREMENTAL) AUMENTA EN +1.
            ProductManager.correlativoId++;
            const newProduct = {
                id: ProductManager.correlativoId, title, description, price, thumbnail, code, stock
            };
            this.products.push(newProduct);
        }
    }

    //METODO QUE DEVUELVE LOS PRODUCTOS.
    getProducts() {
        return this.products;
    }

    //METODO QUE PERMITE FILTRAR EL ARRAY PRODUCTOS POR EL ID QUE RECIBA POR PARAMETRO.
    getProductById(id) {
        let product = this.products.find((dato) => dato.id == id);
        //SI NO ES UNDEFINED, DEVUELVE EL PRODUCTO. SINO, DEVUELVE ERROR.
        if (product !== undefined) {
            return product;
        } else {
            return "ERROR: Product is not found."
        }
    }
}

let testProduct = new ProductManager();
testProduct.addProduct(
    "product testing",
    "This is a testing",
    45000,
    "no img",
    "112233A",
    10
)

console.log("The getProducts method is executed", testProduct.getProducts())