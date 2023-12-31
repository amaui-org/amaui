import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMarkdownCopyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkdownCopyW100'

      short_name='MarkdownCopy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M306-292v-536h416v536H306Zm28-28h360v-480H334v480ZM198-184v-504h28v476h356v28H198Zm202-272h28v-180h72v120h28v-120h72v180h28v-208H400v208Zm-66 136v-480 480Z"/>
    </Icon>
  );
});

IconMaterialMarkdownCopyW100.displayName = 'AmauiIconMaterialMarkdownCopyW100';

export default IconMaterialMarkdownCopyW100;
