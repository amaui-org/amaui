import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReportFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReportFilled'

      short_name='Report'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.075 21q-.4 0-.763-.15-.362-.15-.637-.425l-4.1-4.1q-.275-.275-.425-.637-.15-.363-.15-.763v-5.85q0-.4.15-.763.15-.362.425-.637l4.1-4.1q.275-.275.637-.425.363-.15.763-.15h5.85q.4 0 .763.15.362.15.637.425l4.1 4.1q.275.275.425.637.15.363.15.763v5.85q0 .4-.15.763-.15.362-.425.637l-4.1 4.1q-.275.275-.637.425-.363.15-.763.15ZM12 17q.425 0 .713-.288Q13 16.425 13 16t-.287-.713Q12.425 15 12 15t-.712.287Q11 15.575 11 16t.288.712Q11.575 17 12 17Zm0-4q.425 0 .713-.288Q13 12.425 13 12V8q0-.425-.287-.713Q12.425 7 12 7t-.712.287Q11 7.575 11 8v4q0 .425.288.712.287.288.712.288Z"/>
    </Icon>
  );
});

IconMaterialReportFilled.displayName = 'AmauiIconMaterialReportFilled';

export default IconMaterialReportFilled;
