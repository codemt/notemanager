import { Template } from 'meteor/templating';
import './main.html';
import { Notes } from '../lib/collections';
import { format } from 'util';

Template.body.helpers({
/*
    notes: [

          { text:'My Note 1'},
          { text: 'My Note 2'},
          {text:'My Note 3'}


    ]

    */

    notes(){

        return Notes.find({});

    }
})
Template.add.events({

      'submit .add-form' : function(){

        event.preventDefault();
        //get input value
        const target = event.target;
        const text = target.text.value;

       console.log(text);
       // insert note into collection.
       Notes.insert({
            text,
            createdAt: new Date()
       });

       // clear form
       target.text.value ="";

       //close modal
       $('#addModal').modal('close');

       return false;
      }


})