import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMotionSensorIdleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MotionSensorIdleFilled'

      short_name='MotionSensorIdle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 3.825v2q-.2.05-.4.113-.2.062-.4.137l-1.5-1.5q.525-.275 1.1-.463.575-.187 1.2-.287Zm7.9 7.9q-.1.625-.287 1.2-.188.575-.463 1.1l-1.5-1.5q.075-.2.138-.4.062-.2.112-.4ZM2 20.7v-6h2v4h4v2Zm18-14v-4h-4v-2h6v6Zm-13.175-4-2-2H8v2ZM22 17.875l-2-2V14.7h2Zm-16.9-6.15h2q.3 1.475 1.363 2.537Q9.525 15.325 11 15.625v2q-2.3-.35-3.925-1.975T5.1 11.725Zm1.975-5.95 1.4 1.4q-.5.525-.862 1.175Q7.25 9 7.1 9.725h-2q.175-1.15.688-2.15.512-1 1.287-1.8Zm8.475 8.475 1.4 1.4q-.8.775-1.8 1.288-1 .512-2.15.687v-2q.725-.15 1.375-.512.65-.363 1.175-.863ZM13 3.825q2.3.35 3.938 1.975 1.637 1.625 1.962 3.925h-2q-.3-1.475-1.362-2.537Q14.475 6.125 13 5.825ZM19.15 20.7H16v-2h1.15L4 5.55V6.7H2V3.55L.675 2.225 2.1.8l19.8 19.8-1.425 1.425Z"/>
    </Icon>
  );
});

IconMaterialMotionSensorIdleFilled.displayName = 'AmauiIconMaterialMotionSensorIdleFilled';

export default IconMaterialMotionSensorIdleFilled;
