import {
  animate,
  AnimationMetadata,
  AnimationTriggerMetadata,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const show = (duration = 1000): AnimationTriggerMetadata => {
  const definitions: AnimationMetadata[] = [
    transition(':enter', [
      style({ opacity: 0 }),
      animate(`${duration}ms ease-out`, style({ opacity: 1 })),
    ]),
  ];

  return trigger('show', definitions);
};

export const showApp = (duration = 500): AnimationTriggerMetadata => {
  const definitions: AnimationMetadata[] = [
    transition(':enter', [
      style({
        transform: 'scale(0.5)',
        opacity: 0,
      }),
      animate(
        `${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
        style({
          transform: 'scale(1)',
          opacity: 1,
        }),
      ),
    ]),
  ];

  return trigger('showApp', definitions);
};
