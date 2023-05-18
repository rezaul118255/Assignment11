import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const Category = ({ category }) => {
    console.log(category)
    const { id, name, image } = category
    console.log(name)
    return (
        <div>
            <Tabs>
                <TabList className="flex mx-auto gap-4">
                    <Tab>{name}</Tab>
                    <Tab>Math Learning Toys</Tab>
                    <Tab>Engineering Kits</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Category;