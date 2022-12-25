import React from 'react';

import { } from '@amaui/ui-react';
import { style as styleMethod } from '@amaui/style-react';

const useStyle = styleMethod(theme => ({

}), { name: 'library' });

export default function Library(props: any) {
  const { classes } = useStyle(props);

  React.useEffect(() => {
    console.log(1, props);
  }, []);

  console.log(props);

  return (
    <div>

    </div>
  );
}
