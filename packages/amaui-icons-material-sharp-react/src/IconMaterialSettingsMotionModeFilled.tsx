import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsMotionModeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsMotionModeFilled'

      short_name='SettingsMotionMode'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 21.55q-.525-.175-1.025-.387-.5-.213-.975-.488V3.325q.475-.275.975-.488.5-.212 1.025-.387Zm-4-2.4q-.425-.425-.8-.9-.375-.475-.7-.975V6.725q.325-.5.7-.975.375-.475.8-.9ZM11 17V2.05q.25-.025.5-.038Q11.75 2 12 2q.5 0 1 .05t1 .15v9.05q-1.375.95-2.188 2.45Q11 15.2 11 17Zm10.975-5.775q-.85-.575-1.85-.9Q19.125 10 18 10q-.525 0-1.025.075-.5.075-.975.225V2.825q2.5 1.1 4.125 3.325t1.85 5.075ZM17 22l-.3-1.5q-.3-.125-.562-.262-.263-.138-.538-.338l-1.45.45-1-1.7 1.15-1q-.05-.35-.05-.65 0-.3.05-.65l-1.15-1 1-1.7 1.45.45q.275-.2.538-.338.262-.137.562-.262L17 12h2l.3 1.5q.3.125.563.275.262.15.537.375l1.45-.5 1 1.75-1.15 1q.05.3.05.625t-.05.625l1.15 1-1 1.7-1.45-.45q-.275.2-.537.338-.263.137-.563.262L19 22Zm1-3q.825 0 1.413-.587Q20 17.825 20 17q0-.825-.587-1.412Q18.825 15 18 15q-.825 0-1.413.588Q16 16.175 16 17t.587 1.413Q17.175 19 18 19Z"/>
    </Icon>
  );
});

IconMaterialSettingsMotionModeFilled.displayName = 'AmauiIconMaterialSettingsMotionModeFilled';

export default IconMaterialSettingsMotionModeFilled;
