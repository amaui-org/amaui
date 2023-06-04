import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTrafficW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrafficW100'

      short_name='Traffic'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.925 17.5q.425 0 .713-.288.287-.287.287-.712t-.287-.713q-.288-.287-.713-.287t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288Zm0-4.5q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q12.35 11 11.925 11t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288Zm0-4.5q.425 0 .713-.287.287-.288.287-.713t-.287-.713q-.288-.287-.713-.287t-.712.287q-.288.288-.288.713t.288.713q.287.287.712.287Zm-3.7 11.2v-2.6q-.875-.2-1.237-.713-.363-.512-.363-1.087h1.6v-2.7q-.875-.2-1.237-.713-.363-.512-.363-1.087h1.6V8.1q-.875-.2-1.237-.713-.363-.512-.363-1.087h1.6v-2h7.4v2h1.75q0 .575-.437 1.087-.438.513-1.313.713v2.7h1.75q0 .575-.437 1.087-.438.513-1.313.713v2.7h1.75q0 .575-.437 1.087-.438.513-1.313.713v2.6Zm.7-.7h6V5h-6Zm0 0V5v14Z"/>
    </Icon>
  );
});

IconMaterialTrafficW100.displayName = 'AmauiIconMaterialTrafficW100';

export default IconMaterialTrafficW100;
