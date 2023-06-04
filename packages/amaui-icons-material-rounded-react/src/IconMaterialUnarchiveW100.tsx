import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUnarchiveW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnarchiveW100'

      short_name='Unarchive'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V8q0-.2.038-.387.037-.188.162-.363l1.2-1.4q.15-.15.362-.2.213-.05.438-.05h11q.225 0 .45.037.225.038.35.213l1.15 1.4q.15.15.2.35.05.2.05.4v10.2q0 .65-.425 1.075-.425.425-1.075.425ZM5.4 7.3h13.2l-.85-1H6.25ZM5.8 19h12.4q.3 0 .55-.25.25-.25.25-.55V8H5v10.2q0 .3.25.55.25.25.55.25Zm6.2-2.75q.15 0 .25-.1t.1-.25v-4.5l2 2q.1.1.238.112.137.013.262-.112t.125-.25q0-.125-.125-.25l-2.325-2.325q-.125-.125-.25-.175-.125-.05-.275-.05-.15 0-.275.05-.125.05-.25.175L9.15 12.9q-.1.1-.112.237-.013.138.112.263t.25.125q.125 0 .25-.125l2-2v4.5q0 .15.1.25t.25.1ZM5 19V8v11Z"/>
    </Icon>
  );
});

IconMaterialUnarchiveW100.displayName = 'AmauiIconMaterialUnarchiveW100';

export default IconMaterialUnarchiveW100;
