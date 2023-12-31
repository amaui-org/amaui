import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMarkdownCopyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkdownCopyFilled'

      short_name='MarkdownCopy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360ZM200-80q-33 0-56.5-23.5T120-160v-520q0-17 11.5-28.5T160-720q17 0 28.5 11.5T200-680v520h400q17 0 28.5 11.5T640-120q0 17-11.5 28.5T600-80H200Zm270-540h40v90q0 13 8.5 21.5T540-500q13 0 21.5-8.5T570-530v-90h40v150q0 13 8.5 21.5T640-440q13 0 21.5-8.5T670-470v-170q0-17-11.5-28.5T630-680H450q-17 0-28.5 11.5T410-640v170q0 13 8.5 21.5T440-440q13 0 21.5-8.5T470-470v-150Z"/>
    </Icon>
  );
});

IconMaterialMarkdownCopyFilled.displayName = 'AmauiIconMaterialMarkdownCopyFilled';

export default IconMaterialMarkdownCopyFilled;
