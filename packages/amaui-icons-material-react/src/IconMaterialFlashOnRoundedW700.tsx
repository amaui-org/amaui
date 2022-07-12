import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlashOnRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashOnRoundedW700'
      short_name='FlashOn'

      {...props}
    >
      <path d="M10.8 21.2Q10.475 21.75 9.888 21.575Q9.3 21.4 9.3 20.775V13.475H7.875Q7.225 13.475 6.763 13.012Q6.3 12.55 6.3 11.9V2.05Q6.3 1.4 6.763 0.937Q7.225 0.475 7.875 0.475H15.15Q16.025 0.475 16.475 1.187Q16.925 1.9 16.575 2.675L13.575 9.475H14.95Q15.875 9.475 16.312 10.25Q16.75 11.025 16.3 11.825Z"/>
    </Icon>
  )
});

export default IconMaterialFlashOnRoundedW700;
