import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMotionBlurFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MotionBlurFilled'

      short_name='MotionBlur'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 17q-.425 0-.713-.288Q7 16.425 7 16t.287-.713Q7.575 15 8 15h5q-.35-.425-.562-.925-.213-.5-.338-1.075H10q-.425 0-.712-.288Q9 12.425 9 12t.288-.713Q9.575 11 10 11h2.1q.125-.575.338-1.075.212-.5.562-.925H4q-.425 0-.712-.288Q3 8.425 3 8t.288-.713Q3.575 7 4 7h13q2.075 0 3.538 1.462Q22 9.925 22 12q0 2.075-1.462 3.537Q19.075 17 17 17Zm9-2q1.25 0 2.125-.875T20 12q0-1.25-.875-2.125T17 9q-1.25 0-2.125.875T14 12q0 1.25.875 2.125T17 15ZM3 13q-.425 0-.712-.288Q2 12.425 2 12t.288-.713Q2.575 11 3 11h4q.425 0 .713.287Q8 11.575 8 12t-.287.712Q7.425 13 7 13Zm1 4q-.425 0-.712-.288Q3 16.425 3 16t.288-.713Q3.575 15 4 15h1q.425 0 .713.287Q6 15.575 6 16t-.287.712Q5.425 17 5 17Z"/>
    </Icon>
  );
});

IconMaterialMotionBlurFilled.displayName = 'AmauiIconMaterialMotionBlurFilled';

export default IconMaterialMotionBlurFilled;
