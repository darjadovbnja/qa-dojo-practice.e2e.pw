abstract class BasePage {
    click() {
        console.log('click');
    }

    type() {
        console.log('type');
    }
}

class SomeClass extends BasePage{
    click(){

    }
}
