import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTask = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Task'

      short_name='Task'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10.925 15.125-1.4-1.4q-.15-.15-.325-.225-.175-.075-.362-.075-.188 0-.375.075-.188.075-.338.225-.3.3-.3.713 0 .412.3.712l2.125 2.15q.15.15.325.212.175.063.375.063t.375-.063q.175-.062.325-.212l4.225-4.225q.3-.3.3-.725t-.3-.725q-.3-.3-.725-.3t-.725.3ZM6 22q-.825 0-1.412-.587Q4 20.825 4 20V4q0-.825.588-1.413Q5.175 2 6 2h7.175q.4 0 .763.15.362.15.637.425l4.85 4.85q.275.275.425.637.15.363.15.763V20q0 .825-.587 1.413Q18.825 22 18 22Zm7-14V4H6v16h12V9h-4q-.425 0-.712-.288Q13 8.425 13 8ZM6 4v5-5 16V4Z"/>
    </Icon>
  );
});

IconMaterialTask.displayName = 'AmauiIconMaterialTask';

export default IconMaterialTask;
