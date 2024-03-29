import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFrontLoaderFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FrontLoaderFilled'

      short_name='FrontLoader'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.975 19.775q-1.25 0-2.112-.875Q1 18.025 1 16.775v-8h7v-5h5l3 3-.025 4h1v-2l2.525-2.5 4.475 8.5h-7v-2h-1v1.75q.5.425.763 1.012.262.588.262 1.238 0 1.25-.875 2.125T14 19.775q-.95 0-1.725-.55-.775-.55-1.125-1.45H6.825q-.35.9-1.125 1.45-.775.55-1.725.55Zm0-2q.425 0 .725-.288.3-.287.3-.712t-.287-.713q-.288-.287-.713-.287t-.712.287Q3 16.35 3 16.775t.275.712q.275.288.7.288Zm10.025 0q.425 0 .713-.288.287-.287.287-.712t-.287-.713q-.288-.287-.713-.287t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288Zm6.675-5L19 9.6v3.175Zm-10.675-2h4V7.6l-1.85-1.825H10Z"/>
    </Icon>
  );
});

IconMaterialFrontLoaderFilled.displayName = 'AmauiIconMaterialFrontLoaderFilled';

export default IconMaterialFrontLoaderFilled;
