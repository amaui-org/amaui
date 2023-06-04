import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoCrashW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoCrashW100'

      short_name='NoCrash'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 5.425 10.1 3.55l.475-.5L12 4.475l3.55-3.55.475.475ZM4.3 22.7v-7.5l2.075-5.9h11.25l2.075 5.9v7.5H19v-2H5v2Zm1-8.2h13.4L17.1 10H6.9Zm-.3.7V20Zm2.4 3.4q.425 0 .713-.288.287-.287.287-.712t-.287-.712Q7.825 16.6 7.4 16.6t-.712.288q-.288.287-.288.712t.288.712q.287.288.712.288Zm9.2 0q.425 0 .712-.288.288-.287.288-.712t-.288-.712q-.287-.288-.712-.288t-.712.288q-.288.287-.288.712t.288.712q.287.288.712.288ZM5 20h14v-4.8H5Z"/>
    </Icon>
  );
});

IconMaterialNoCrashW100.displayName = 'AmauiIconMaterialNoCrashW100';

export default IconMaterialNoCrashW100;
