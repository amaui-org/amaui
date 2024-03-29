import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialClosedCaptionDisabledFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClosedCaptionDisabledFilled'

      short_name='ClosedCaptionDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.775 22.575 17.175 20H5q-.825 0-1.413-.587Q3 18.825 3 18V5.825L1.375 4.2q-.3-.3-.288-.713.013-.412.313-.712t.713-.3q.412 0 .712.3l18.375 18.4q.3.3.3.7 0 .4-.3.7-.3.3-.712.3-.413 0-.713-.3ZM21 18.125l-3.35-3.35q.175-.125.263-.337Q18 14.225 18 14v-.5q0-.2-.15-.35-.15-.15-.35-.15H17q-.2 0-.35.15-.15.15-.15.35h-.125L14.5 11.625V10.5h2v.125q0 .2.15.35.15.15.35.15h.5q.2 0 .35-.15.15-.15.15-.35V10q0-.425-.288-.713Q17.425 9 17 9h-3q-.425 0-.712.287Q13 9.575 13 10v.125L6.875 4H19q.825 0 1.413.588Q21 5.175 21 6ZM7 15h3q.425 0 .713-.288Q11 14.425 11 14v-.175l-.475-.475-.475-.475H10q-.2 0-.35.15-.15.15-.15.35v.125h-2v-3.175L6.375 9.2q-.175.125-.275.337Q6 9.75 6 10v4q0 .425.287.712Q6.575 15 7 15Z"/>
    </Icon>
  );
});

IconMaterialClosedCaptionDisabledFilled.displayName = 'AmauiIconMaterialClosedCaptionDisabledFilled';

export default IconMaterialClosedCaptionDisabledFilled;
