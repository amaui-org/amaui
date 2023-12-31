import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonPlayW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonPlayW100'

      short_name='PersonPlay'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M234-486 128-592l106-105 105 105-105 106Zm168 354v-179q-58-5-115.5-12.5T172-345l6-28q75 18 149.892 26t152 8Q557-339 632-347t150-26l6 28q-57 14-114.5 21.5T558-311v179H402ZM234-525l66-67-66-66-67 66 67 67Zm246-135q-35 0-59.5-24.5T396-744q0-35 24.5-59.5T480-828q35 0 59.5 24.5T564-744q0 35-24.5 59.5T480-660Zm0 249q-26.4 0-45.2-18.8Q416-448.6 416-475q0-26.4 18.8-45.2Q453.6-539 480-539q26.4 0 45.2 18.8Q544-501.4 544-475q0 26.4-18.8 45.2Q506.4-411 480-411Zm0-277q23 0 39.5-16.5T536-744q0-23-16.5-39.5T480-800q-23 0-39.5 16.5T424-744q0 23 16.5 39.5T480-688Zm199 200-48-84 48-84h93l48 84-48 84h-93Zm15.333-28H757l31-56-31.333-56H694l-31 56 31.333 56ZM234-592Zm246-152Zm246 172Z"/>
    </Icon>
  );
});

IconMaterialPersonPlayW100.displayName = 'AmauiIconMaterialPersonPlayW100';

export default IconMaterialPersonPlayW100;
