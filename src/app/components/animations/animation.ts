import { animate, state, style, transition, trigger } from '@angular/animations';

export const oHoverTrigger = trigger('onHover', [
    state('over', style({
      height: '25vh',        
      width: '20vw',
      minHeight: '85px',
      minWidth: '75vh',
      fontSize: '8vh'
    })),
    state('out', style({
      height: '15vh',        
      width: '10vw',
      minHeight: '55px',
      minWidth: '50vh',
      fontSize: '4vh'
    })),
    transition('over => out', [
      animate('0.25s')
    ]),
    transition('out => over', [
      animate('0.20s')
    ])
  ]
  )