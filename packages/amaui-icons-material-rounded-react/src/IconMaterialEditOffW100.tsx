import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEditOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditOffW100'

      short_name='EditOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m18.925 20.8-6.875-6.875-5.4 5.4q-.125.125-.25.175-.125.05-.275.05H5.2q-.325 0-.538-.213-.212-.212-.212-.537v-.925q0-.15.05-.275.05-.125.175-.25l5.4-5.4-7.15-7.15Q2.8 4.675 2.8 4.55t.125-.25q.125-.125.25-.125t.25.125l16 16q.1.1.113.238.012.137-.113.262t-.25.125q-.125 0-.25-.125Zm-7.85-7.875-.5-.475.5.475.475.5Zm2.875-.9-.5-.5 2.95-2.95-.975-.975-2.95 2.95-.5-.5 3.45-3.45L17.4 8.575Zm3.95-3.95L15.925 6.1 17.1 4.925q.2-.2.5-.2t.5.2l.975.975q.2.2.2.5t-.2.5Zm-4.925 2.95ZM5.15 18.85h.975l5.425-5.425-.975-.975-5.425 5.425Z"/>
    </Icon>
  );
});

IconMaterialEditOffW100.displayName = 'AmauiIconMaterialEditOffW100';

export default IconMaterialEditOffW100;
