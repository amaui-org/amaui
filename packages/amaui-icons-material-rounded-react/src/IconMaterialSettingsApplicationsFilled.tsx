import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsApplicationsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsApplicationsFilled'

      short_name='SettingsApplications'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm6.4-4h1.2q.175 0 .3-.113.125-.112.175-.287l.225-1.1q.3-.125.563-.262.262-.138.537-.338l1.075.325q.175.05.325-.012.15-.063.25-.213l.6-1q.1-.15.062-.325-.037-.175-.187-.3l-.825-.725q.05-.35.05-.65 0-.3-.05-.65l.825-.725q.15-.125.187-.3.038-.175-.062-.325l-.6-1q-.1-.15-.25-.213-.15-.062-.325-.012L14.4 9.1q-.275-.2-.537-.338-.263-.137-.563-.262l-.225-1.1q-.05-.175-.175-.288Q12.775 7 12.6 7h-1.2q-.175 0-.3.112-.125.113-.175.288L10.7 8.5q-.3.125-.563.262-.262.138-.537.338l-1.075-.325q-.175-.05-.325.012-.15.063-.25.213l-.6 1q-.1.15-.063.325.038.175.188.3l.825.725q-.05.35-.05.65 0 .3.05.65l-.825.725q-.15.125-.188.3-.037.175.063.325l.6 1q.1.15.25.213.15.062.325.012L9.6 14.9q.275.2.537.338.263.137.563.262l.225 1.1q.05.175.175.287.125.113.3.113Zm.6-3q-.825 0-1.412-.588Q10 12.825 10 12t.588-1.413Q11.175 10 12 10t1.413.587Q14 11.175 14 12q0 .825-.587 1.412Q12.825 14 12 14Z"/>
    </Icon>
  );
});

IconMaterialSettingsApplicationsFilled.displayName = 'AmauiIconMaterialSettingsApplicationsFilled';

export default IconMaterialSettingsApplicationsFilled;
