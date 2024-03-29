import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWhatshotFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WhatshotFilled'

      short_name='Whatshot'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-2.5 0-4.512-1.062-2.013-1.063-3.513-3.013L8.05 13.85l2.3 1.925q.3.25.688.225.387-.025.662-.3l4.3-4.3V13q0 .425.288.712.287.288.712.288t.712-.288Q18 13.425 18 13V9q0-.425-.288-.713Q17.425 8 17 8h-4q-.425 0-.712.287Q12 8.575 12 9t.288.712Q12.575 10 13 10h1.6l-3.65 3.65-2.3-1.925q-.3-.25-.687-.225-.388.025-.663.3l-4.375 4.375q-.5-1.15-.762-2.463Q1.9 12.4 2.05 11q.375-3.8 3.2-6.4Q8.075 2 12 2q2.075 0 3.887.787 1.813.788 3.175 2.151 1.363 1.362 2.15 3.175Q22 9.925 22 12q0 2.05-.788 3.875-.787 1.825-2.15 3.187-1.362 1.363-3.175 2.15Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialWhatshotFilled.displayName = 'AmauiIconMaterialWhatshotFilled';

export default IconMaterialWhatshotFilled;
