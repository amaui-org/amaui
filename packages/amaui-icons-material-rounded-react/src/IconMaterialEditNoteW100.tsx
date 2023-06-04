import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEditNoteW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditNoteW100'

      short_name='EditNote'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.675 14.55-1.225-1.225.725-.725q.125-.125.25-.125t.25.125l.725.725q.125.125.125.25t-.125.25Zm-7.025 5.8v-1.225l5.1-5.1 1.225 1.225-5.1 5.1Zm-9-5v-.7h7v.7Zm0-4v-.7h11v.7Zm0-4v-.7h11v.7Z"/>
    </Icon>
  );
});

IconMaterialEditNoteW100.displayName = 'AmauiIconMaterialEditNoteW100';

export default IconMaterialEditNoteW100;
