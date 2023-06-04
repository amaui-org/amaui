import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDirectionsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsW100'

      short_name='Directions'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.35 11.35h4.8v.825q0 .2.188.287.187.088.337-.062l1.05-1.05q.15-.15.15-.363 0-.212-.15-.362L14.675 9.6q-.15-.15-.337-.075-.188.075-.188.275v.85H9.4q-.325 0-.537.212-.213.213-.213.538V14q0 .15.1.25t.25.1q.15 0 .25-.1t.1-.25Zm2.65 9q-.275 0-.55-.112-.275-.113-.5-.338L4.1 13.05q-.225-.225-.337-.5-.113-.275-.113-.55t.113-.55q.112-.275.337-.5l6.85-6.85q.225-.225.5-.338.275-.112.55-.112t.55.112q.275.113.5.338l6.85 6.85q.225.225.338.5.112.275.112.55t-.112.55q-.113.275-.338.5l-6.85 6.85q-.225.225-.5.338-.275.112-.55.112ZM8 16l3.45 3.45q.225.225.55.225.325 0 .55-.225l6.9-6.9q.225-.225.225-.55 0-.325-.225-.55l-6.9-6.9q-.225-.225-.55-.225-.325 0-.55.225l-6.9 6.9q-.225.225-.225.55 0 .325.225.55Zm4-4Z"/>
    </Icon>
  );
});

IconMaterialDirectionsW100.displayName = 'AmauiIconMaterialDirectionsW100';

export default IconMaterialDirectionsW100;
