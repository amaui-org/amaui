import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEda = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Eda'

      short_name='Eda'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M280 576V216q0-17 11.5-28.5T320 176q17 0 28.5 11.5T360 216v360h-80Zm160 0V176q0-17 11.5-28.5T480 136q17 0 28.5 11.5T520 176v400h-80Zm160 163V256q0-17 11.5-28.5T640 216q17 0 28.5 11.5T680 256v436l-80 47ZM280 936h267q8 0 15-3.5t13-8.5l182-182-287 167-130-173H200v120q0 33 23.5 56.5T280 936Zm0 80q-66 0-113-47t-47-113V656h260l110 147 190-111 90-52q21-12 44.5-10.5T858 645l63 47-289 289q-17 17-39 26t-46 9H280Zm-80-360h-80V296q0-17 11.5-28.5T160 256q17 0 28.5 11.5T200 296v360Zm0-80h400-400Zm80 360h-80 375-295Z"/>
    </Icon>
  );
});

IconMaterialEda.displayName = 'AmauiIconMaterialEda';

export default IconMaterialEda;
