import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUnfoldLessDouble = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnfoldLessDouble'

      short_name='UnfoldLessDouble'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12.025 8.15 2.45-2.45q.3-.3.713-.3.412 0 .712.3t.3.7q0 .4-.3.7l-3.175 3.2q-.3.3-.7.3-.4 0-.7-.3L8.15 7.1q-.3-.3-.3-.713 0-.412.3-.712t.7-.3q.4 0 .7.3Zm0-5L14.475.7q.3-.3.713-.3.412 0 .712.3t.3.7q0 .4-.3.7l-3.175 3.2q-.3.3-.7.3-.4 0-.7-.3L8.15 2.1q-.3-.3-.3-.713 0-.412.3-.712t.7-.3q.4 0 .7.3Zm0 17.65L9.55 23.25q-.275.275-.7.275-.425 0-.7-.275-.3-.3-.287-.712.012-.413.287-.688l3.175-3.175q.3-.3.7-.3.4 0 .7.3L15.9 21.85q.3.3.288.7-.013.4-.288.7-.3.3-.7.312-.4.013-.7-.287Zm0-5L9.55 18.25q-.275.275-.7.275-.425 0-.7-.275-.3-.3-.287-.712.012-.413.287-.688l3.175-3.175q.3-.3.7-.3.4 0 .7.3L15.9 16.85q.3.3.288.7-.013.4-.288.7-.3.3-.7.312-.4.013-.7-.287Z"/>
    </Icon>
  );
});

IconMaterialUnfoldLessDouble.displayName = 'AmauiIconMaterialUnfoldLessDouble';

export default IconMaterialUnfoldLessDouble;
