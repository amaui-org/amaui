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
      <path d="M3.975 19.775q-1.25 0-2.112-.875Q1 18.025 1 16.775v-6q0-.825.588-1.413.587-.587 1.412-.587h5v-4q0-.425.288-.713.287-.287.712-.287h4q1.25 0 2.125.875T16 6.775l-.025 4h1V9.6q.025-.4.175-.775t.425-.65l.975-.95q.35-.35.838-.275.487.075.737.525L23.2 13.3q.275.5-.012.987-.288.488-.863.488h-3.35q-.825 0-1.413-.587-.587-.588-.587-1.413h-1v1.75q.5.425.763 1.012.262.588.262 1.238 0 1.25-.875 2.125T14 19.775q-.95 0-1.725-.55-.775-.55-1.125-1.45H6.825q-.35.9-1.125 1.45-.775.55-1.725.55Zm0-2q.425 0 .725-.288.3-.287.3-.712t-.287-.713q-.288-.287-.713-.287t-.712.287Q3 16.35 3 16.775t.275.712q.275.288.7.288Zm10.025 0q.425 0 .713-.288.287-.287.287-.712t-.287-.713q-.288-.287-.713-.287t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288Zm6.675-5L19 9.6v3.175Zm-10.675-2h4v-4q0-.425-.287-.713-.288-.287-.713-.287h-3Z"/>
    </Icon>
  );
});

IconMaterialFrontLoaderFilled.displayName = 'AmauiIconMaterialFrontLoaderFilled';

export default IconMaterialFrontLoaderFilled;
