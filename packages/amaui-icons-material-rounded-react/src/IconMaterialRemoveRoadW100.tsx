import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRemoveRoadW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveRoadW100'

      short_name='RemoveRoad'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.35 12.6V5q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v7.6q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25Zm-11.4 6.7V5q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v14.3q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25Zm5.7-12V5q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v2.3q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25Zm0 6V11q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v2.3q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25Zm0 6V17q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v2.3q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25Zm6.075-.025L15.85 21.15q-.1.1-.25.1t-.25-.1q-.1-.1-.1-.237 0-.138.1-.238l1.875-1.875-1.875-1.875q-.1-.1-.1-.25t.1-.25q.1-.1.238-.1.137 0 .237.1L17.7 18.3l1.875-1.875q.1-.1.237-.113.138-.012.263.113t.125.25q0 .125-.125.25l-1.85 1.85 1.85 1.875q.1.1.113.237.012.138-.113.263t-.25.125q-.125 0-.25-.125Z"/>
    </Icon>
  );
});

IconMaterialRemoveRoadW100.displayName = 'AmauiIconMaterialRemoveRoadW100';

export default IconMaterialRemoveRoadW100;
