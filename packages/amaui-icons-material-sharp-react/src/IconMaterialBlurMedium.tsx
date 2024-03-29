import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBlurMedium = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BlurMedium'

      short_name='BlurMedium'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 17q-.425 0-.713-.288Q7 16.425 7 16t.287-.713Q7.575 15 8 15h3q-.35-.425-.562-.925-.213-.5-.338-1.075H5.5q-.425 0-.713-.288Q4.5 12.425 4.5 12t.287-.713Q5.075 11 5.5 11h4.6q.125-.575.338-1.075.212-.5.562-.925H5q-.425 0-.713-.288Q4 8.425 4 8t.287-.713Q4.575 7 5 7h10q2.075 0 3.538 1.462Q20 9.925 20 12q0 2.075-1.462 3.537Q17.075 17 15 17Zm7-2q1.25 0 2.125-.875T18 12q0-1.25-.875-2.125T15 9q-1.25 0-2.125.875T12 12q0 1.25.875 2.125T15 15ZM5 17q-.425 0-.713-.288Q4 16.425 4 16t.287-.713Q4.575 15 5 15t.713.287Q6 15.575 6 16t-.287.712Q5.425 17 5 17Z"/>
    </Icon>
  );
});

IconMaterialBlurMedium.displayName = 'AmauiIconMaterialBlurMedium';

export default IconMaterialBlurMedium;
