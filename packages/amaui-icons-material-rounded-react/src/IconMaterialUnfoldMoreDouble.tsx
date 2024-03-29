import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUnfoldMoreDouble = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnfoldMoreDouble'

      short_name='UnfoldMoreDouble'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.025 2.825 9.55 5.3q-.3.3-.712.287-.413-.012-.713-.312t-.3-.713q0-.412.3-.712l3.2-3.175q.3-.3.7-.3.4 0 .7.3l3.175 3.2q.3.3.3.7 0 .4-.3.7-.3.3-.712.3-.413 0-.713-.3Zm0 5L9.55 10.3q-.3.3-.712.287-.413-.012-.713-.312t-.3-.713q0-.412.3-.712l3.2-3.175q.3-.3.7-.3.4 0 .7.3l3.175 3.2q.3.3.3.7 0 .4-.3.7-.3.3-.712.3-.413 0-.713-.3Zm0 8.325 2.475-2.475q.3-.3.7-.288.4.013.7.313.275.3.288.7.012.4-.288.7l-3.175 3.175q-.3.3-.7.3-.4 0-.7-.3L8.15 15.1q-.275-.275-.287-.688Q7.85 14 8.15 13.7q.275-.275.7-.275.425 0 .7.275Zm0 5 2.475-2.475q.3-.3.7-.288.4.013.7.313.275.3.288.7.012.4-.288.7l-3.175 3.175q-.3.3-.7.3-.4 0-.7-.3L8.15 20.1q-.275-.275-.287-.687Q7.85 19 8.15 18.7q.275-.275.7-.275.425 0 .7.275Z"/>
    </Icon>
  );
});

IconMaterialUnfoldMoreDouble.displayName = 'AmauiIconMaterialUnfoldMoreDouble';

export default IconMaterialUnfoldMoreDouble;
