import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInkEraserW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InkEraserW100'

      short_name='InkEraser'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M662-240h172q6 0 10 4t4 10q0 6-4 10t-10 4H634l28-28Zm-470 28q-6 0-11-2t-10-7l-39-39q-18-18-18.5-42t17.5-43l396-412q18-19 42-18.5t42 18.5l153 153q18 18 18.5 42.5T765-519L475-221q-5 5-10.5 7t-11.5 2H192Zm262-28 291-299q8-8 8-23t-8-23L592-738q-8-8-22.5-8t-22.5 9L151-327q-8 9-8 23.5t8 22.5l41 41h262Zm26-240Z"/>
    </Icon>
  );
});

IconMaterialInkEraserW100.displayName = 'AmauiIconMaterialInkEraserW100';

export default IconMaterialInkEraserW100;
