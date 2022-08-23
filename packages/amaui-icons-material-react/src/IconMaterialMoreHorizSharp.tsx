import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMoreHorizSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoreHorizSharp'
      short_name='MoreHoriz'

      {...props}
    >
      <path d="M6 14Q5.175 14 4.588 13.412Q4 12.825 4 12Q4 11.175 4.588 10.587Q5.175 10 6 10Q6.825 10 7.412 10.587Q8 11.175 8 12Q8 12.825 7.412 13.412Q6.825 14 6 14ZM12 14Q11.175 14 10.588 13.412Q10 12.825 10 12Q10 11.175 10.588 10.587Q11.175 10 12 10Q12.825 10 13.413 10.587Q14 11.175 14 12Q14 12.825 13.413 13.412Q12.825 14 12 14ZM18 14Q17.175 14 16.587 13.412Q16 12.825 16 12Q16 11.175 16.587 10.587Q17.175 10 18 10Q18.825 10 19.413 10.587Q20 11.175 20 12Q20 12.825 19.413 13.412Q18.825 14 18 14Z"/>
    </Icon>
  );
});

IconMaterialMoreHorizSharp.displayName = 'AmauiIconMaterialMoreHorizSharp';

export default IconMaterialMoreHorizSharp;
