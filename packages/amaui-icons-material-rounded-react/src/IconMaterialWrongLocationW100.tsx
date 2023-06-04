import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWrongLocationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WrongLocationW100'

      short_name='WrongLocation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.5 7.5q.125.125.25.125T16 7.5l1.85-1.85L19.7 7.5q.125.125.25.125t.25-.125q.125-.125.125-.25T20.2 7l-1.85-1.85L20.2 3.3q.125-.125.125-.25T20.2 2.8q-.125-.125-.25-.125t-.25.125l-1.85 1.85L16 2.8q-.125-.125-.25-.125t-.25.125q-.125.125-.125.25t.125.25l1.85 1.85L15.5 7q-.125.125-.125.25t.125.25ZM12 11.35q.575 0 .963-.388.387-.387.387-.962t-.387-.963Q12.575 8.65 12 8.65t-.962.387q-.388.388-.388.963t.388.962q.387.388.962.388Zm0 9.85q-.15 0-.275-.037-.125-.038-.25-.138-3.45-3.2-5.137-5.938Q4.65 12.35 4.65 10.2q0-3.45 2.225-5.5T12 2.65q.25 0 .5.012.25.013.5.063v.7q-.25-.05-.488-.063-.237-.012-.512-.012-2.8 0-4.725 1.912Q5.35 7.175 5.35 10.2q0 1.9 1.75 4.762 1.75 2.863 4.9 5.563 3.15-2.7 4.9-5.563 1.75-2.862 1.75-4.762V10h.7v.2q0 2.15-1.687 4.887-1.688 2.738-5.138 5.938-.1.1-.237.138-.138.037-.288.037Zm.35-9.575Z"/>
    </Icon>
  );
});

IconMaterialWrongLocationW100.displayName = 'AmauiIconMaterialWrongLocationW100';

export default IconMaterialWrongLocationW100;
