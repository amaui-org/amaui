import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExpandAllW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExpandAllW100'

      short_name='ExpandAll'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-158 174-172q4-4 9.5-4.5T674-330q5 5 5 10t-5 10L501-137q-9 9-21 9t-21-9L286-310q-4-4-4.5-9.5T286-330q5-5 10-4.5t10 4.5l174 172Zm0-644L306-630q-4 4-9.5 4.5T286-630q-5-5-5-10t5-10l173-173q9-9 21-9t21 9l173 173q4 4 4.5 9.5T674-630q-5 5-10 4.5t-10-4.5L480-802Z"/>
    </Icon>
  );
});

IconMaterialExpandAllW100.displayName = 'AmauiIconMaterialExpandAllW100';

export default IconMaterialExpandAllW100;
