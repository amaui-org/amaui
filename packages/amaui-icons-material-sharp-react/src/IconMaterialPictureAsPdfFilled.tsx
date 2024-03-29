import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPictureAsPdfFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureAsPdfFilled'

      short_name='PictureAsPdf'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 12.5h1v-2h1q.425 0 .713-.288Q12 9.925 12 9.5v-1q0-.425-.287-.713Q11.425 7.5 11 7.5H9Zm1-3v-1h1v1Zm3 3h2q.425 0 .713-.288.287-.287.287-.712v-3q0-.425-.287-.713Q15.425 7.5 15 7.5h-2Zm1-1v-3h1v3Zm3 1h1v-2h1v-1h-1v-1h1v-1h-2ZM6 18V2h16v16Zm-4 4V6h2v14h14v2Z"/>
    </Icon>
  );
});

IconMaterialPictureAsPdfFilled.displayName = 'AmauiIconMaterialPictureAsPdfFilled';

export default IconMaterialPictureAsPdfFilled;
