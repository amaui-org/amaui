import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlayLesson = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayLesson'

      short_name='PlayLesson'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 22q-.825 0-1.413-.587Q3 20.825 3 20V4q0-.825.587-1.413Q4.175 2 5 2h12q.825 0 1.413.587Q19 3.175 19 4v6.1q0 .425-.288.712-.287.288-.712.288t-.712-.288Q17 10.525 17 10.1V4h-5v6.125q0 .3-.25.437-.25.138-.5-.012L9.5 9.5l-1.75 1.05q-.25.15-.5.012-.25-.137-.25-.437V4H5v16h5.775q.425 0 .713.288.287.287.287.712t-.287.712Q11.2 22 10.775 22Zm13 1q-2.075 0-3.537-1.462Q13 20.075 13 18q0-2.075 1.463-3.538Q15.925 13 18 13t3.538 1.462Q23 15.925 23 18q0 2.075-1.462 3.538Q20.075 23 18 23Zm-.475-2.975 2.55-1.6q.25-.15.25-.425t-.25-.425l-2.55-1.6q-.25-.175-.512-.025-.263.15-.263.45v3.2q0 .3.263.45.262.15.512-.025ZM10.775 4H5h12-6.225ZM7 4h5Z"/>
    </Icon>
  );
});

IconMaterialPlayLesson.displayName = 'AmauiIconMaterialPlayLesson';

export default IconMaterialPlayLesson;
