import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialReplyRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReplyRoundedW100'
      short_name='Reply'

      {...props}
    >
      <path d="M19.875 18.35Q19.725 18.35 19.625 18.25Q19.525 18.15 19.525 18V15Q19.525 13.475 18.463 12.412Q17.4 11.35 15.875 11.35H5.125L9.15 15.375Q9.25 15.475 9.25 15.6Q9.25 15.725 9.125 15.85Q9 15.975 8.875 15.975Q8.75 15.975 8.625 15.85L4.3 11.525Q4.175 11.4 4.125 11.275Q4.075 11.15 4.075 11Q4.075 10.85 4.125 10.725Q4.175 10.6 4.3 10.475L8.65 6.125Q8.75 6.025 8.875 6.025Q9 6.025 9.125 6.15Q9.25 6.275 9.25 6.4Q9.25 6.525 9.125 6.65L5.125 10.65H15.875Q17.675 10.65 18.95 11.925Q20.225 13.2 20.225 15V18Q20.225 18.15 20.125 18.25Q20.025 18.35 19.875 18.35Z"/>
    </Icon>
  );
});

IconMaterialReplyRoundedW100.displayName = 'AmauiIconMaterialReplyRoundedW100';

export default IconMaterialReplyRoundedW100;
