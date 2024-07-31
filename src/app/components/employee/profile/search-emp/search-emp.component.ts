import { ChangeDetectorRef, Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EployeeService } from '../../../../services/employee/eployee.service';
import { GlobalService } from '../../../../services/global.service';

@Component({
  selector: 'app-search-emp',
  templateUrl: './search-emp.component.html',
  styleUrls: ['./search-emp.component.scss']
})
export class SearchEmpComponent {
  showLoading: boolean = false;
  searchText:String = '';
  suggestions: any = []

  constructor( private empService: EployeeService,
    private cdr: ChangeDetectorRef,
    private global: GlobalService
    ){

  }

  search(term: string) {
    console.log(term)
    this.showLoading = true;
    if (term.length >= 3) {
      this.empService.getAllUser({searchUsers: term}).subscribe((data:any) => {
        this.suggestions = data.data;
        this.showLoading = false;
        this.cdr.detectChanges();
      });
    } else {
      this.showLoading = false;
      this.suggestions = [];
    }
  }

  setEmpName(emp:any){
    this.resetSearchText()
     this.global.dataSubject.next(emp);
  }

  resetSearchText(){
    this.suggestions = [];
    this.searchText = '';
    this.cdr.detectChanges();
  }
}
