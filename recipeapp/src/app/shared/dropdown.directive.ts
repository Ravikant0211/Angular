import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    // @HostBinding('class.open') isOpen = false;

    // @HostListener('click') toggleOpen() {
    //     this.isOpen = !this.isOpen;
    // }

    // to toggle close the dropdown by clicking anywhere
    @HostBinding('class.open') isOpen = false;
    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        // console.log('event.target: ', event.target);
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? 
            !this.isOpen : false;
    }

    constructor(private elRef: ElementRef) {}
}