import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHeadsetOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeadsetOff'

      short_name='HeadsetOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m21.1 18.15-2-2V14h-2v.15l-1.475-1.475q.25-.3.625-.487.375-.188.85-.188h2v-1q0-2.95-2.05-4.975Q15 4 12.1 4q-1.1 0-2.088.312-.987.313-1.812.888L6.75 3.8q1.125-.875 2.488-1.338Q10.6 2 12.1 2q1.85 0 3.488.7 1.637.7 2.862 1.925t1.938 2.862Q21.1 9.125 21.1 11Zm-8 4.85q-.425 0-.712-.288-.288-.287-.288-.712t.288-.712Q12.675 21 13.1 21h5l-1-1q-.825 0-1.412-.587Q15.1 18.825 15.1 18L5.575 8.475q-.225.6-.35 1.225-.125.625-.125 1.3v1h2q.825 0 1.412.587.588.588.588 1.413v4q0 .825-.588 1.413Q7.925 20 7.1 20h-2q-.825 0-1.412-.587Q3.1 18.825 3.1 18v-7q0-1.125.238-2.113.237-.987.737-1.937L1.4 4.275q-.3-.3-.287-.7.012-.4.312-.7.3-.275.7-.288.4-.012.7.288l18.375 18.4q.275.275.275.687 0 .413-.275.713-.3.3-.687.325-.388.025-.588-.175-.15.125-.35.15-.2.025-.475.025Zm-8-5h2v-4h-2v4Zm0 0h2Zm14-1.85Z"/>
    </Icon>
  );
});

IconMaterialHeadsetOff.displayName = 'AmauiIconMaterialHeadsetOff';

export default IconMaterialHeadsetOff;
