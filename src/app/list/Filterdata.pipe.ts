import { Pipe, PipeTransform } from "@angular/core";
import Task from './Task';

@Pipe({
    name: 'Filterdata'
})

export default class Filterdata implements PipeTransform {
    transform(todos: Array<Task>, current_filter: string) : any {
        return todos.filter(function(task) {
            var filter_condition;

            // if filter is all, then return everything
            if(current_filter === 'all') {
                return true;
            } 
            
            if(current_filter === 'active') {
                filter_condition = false;
            } else if(current_filter === 'completed') {
                filter_condition = true;
            }


            return task.is_completed === filter_condition;
        });
    }

}

