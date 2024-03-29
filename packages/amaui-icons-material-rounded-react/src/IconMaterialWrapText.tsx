import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWrapText = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WrapText'

      short_name='WrapText'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 12.5q-.425 0-.713-.288Q4 11.925 4 11.5t.287-.713Q4.575 10.5 5 10.5h12.25q1.575 0 2.663 1.087Q21 12.675 21 14.25q0 1.575-1.087 2.663Q18.825 18 17.25 18h-2.4l.55.55q.3.3.3.713 0 .412-.3.712t-.712.3q-.413 0-.713-.3L11.7 17.7q-.15-.15-.212-.325-.063-.175-.063-.375t.063-.375q.062-.175.212-.325L14 14q.275-.275.688-.275.412 0 .712.3t.288.725q-.013.425-.313.725L14.85 16h2.4q.725 0 1.238-.512.512-.513.512-1.238t-.512-1.238q-.513-.512-1.238-.512ZM5 7q-.425 0-.713-.287Q4 6.425 4 6t.287-.713Q4.575 5 5 5h14q.425 0 .712.287Q20 5.575 20 6t-.288.713Q19.425 7 19 7Zm0 11q-.425 0-.713-.288Q4 17.425 4 17t.287-.712Q4.575 16 5 16h3.025q.425 0 .7.288Q9 16.575 9 17t-.287.712Q8.425 18 8 18Z"/>
    </Icon>
  );
});

IconMaterialWrapText.displayName = 'AmauiIconMaterialWrapText';

export default IconMaterialWrapText;
