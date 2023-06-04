import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMotionSensorIdleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MotionSensorIdleW100'

      short_name='MotionSensorIdle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.75 4.525v.7q-.275.05-.55.15-.275.1-.55.225l-.525-.525q.375-.2.788-.325.412-.125.837-.225Zm7.45 7.45q-.1.425-.225.837-.125.413-.325.788l-.525-.525q.125-.275.225-.55t.15-.55ZM3.3 19.4v-4.7H4v4h4v.7ZM20 6.7v-4h-4V2h4.7v4.7Zm-13.25-4-.7-.7H8v.7ZM20.7 16.65l-.7-.7V14.7h.7ZM5.8 11.975h.7q.35 1.6 1.5 2.75t2.75 1.5v.7Q8.875 16.55 7.525 15.2T5.8 11.975ZM7.525 6.25l.5.475q-.575.55-.95 1.25t-.575 1.5h-.7q.2-.95.638-1.763.437-.812 1.087-1.462ZM16 14.7l.475.5q-.65.65-1.462 1.088-.813.437-1.763.637v-.7q.8-.2 1.5-.575.7-.375 1.25-.95ZM13.25 4.525q1.875.375 3.225 1.725T18.2 9.475h-.7q-.35-1.6-1.5-2.75t-2.75-1.5ZM19.675 19.4H16v-.7h2.975L4 3.725V6.7h-.7V3.025l-1.05-1.05.5-.5 19.05 19.05-.5.5Z"/>
    </Icon>
  );
});

IconMaterialMotionSensorIdleW100.displayName = 'AmauiIconMaterialMotionSensorIdleW100';

export default IconMaterialMotionSensorIdleW100;
